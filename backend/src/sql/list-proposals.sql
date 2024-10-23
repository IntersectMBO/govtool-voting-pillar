WITH LatestDrepDistr AS (
    SELECT
        *,
        ROW_NUMBER() OVER (PARTITION BY hash_id ORDER BY epoch_no DESC) AS rn
    FROM
        drep_distr
),
EpochUtils AS (
    SELECT
        (Max(end_time) - Min(end_time)) / (Max(NO) - Min(NO)) AS epoch_duration,
        Max(NO) AS last_epoch_no,
        Max(end_time) AS last_epoch_end_time
    FROM
        epoch
),
always_no_confidence_voting_power AS (
    SELECT
        COALESCE((
            SELECT
                amount
            FROM drep_hash
            LEFT JOIN drep_distr ON drep_hash.id = drep_distr.hash_id
            WHERE
                drep_hash.view = 'drep_always_no_confidence'
            ORDER BY epoch_no DESC LIMIT 1), 0) AS amount
),
always_abstain_voting_power AS (
    SELECT
        COALESCE((
            SELECT
                amount
            FROM drep_hash
            LEFT JOIN drep_distr ON drep_hash.id = drep_distr.hash_id
            WHERE
                drep_hash.view = 'drep_always_abstain'
            ORDER BY epoch_no DESC LIMIT 1), 0) AS amount
)
SELECT
    gov_action_proposal.id,
    encode(creator_tx.hash, 'hex') AS tx_hash,  -- Proposal ID in format hash#index
    gov_action_proposal.index,
    gov_action_proposal.type::text,
    CASE
        WHEN gov_action_proposal.type = 'TreasuryWithdrawals' THEN
            json_build_object('Reward Address', stake_address.view, 'Amount', treasury_withdrawal.amount)
        WHEN gov_action_proposal.type::text = 'InfoAction' THEN
            json_build_object()
        WHEN gov_action_proposal.type::text = 'HardForkInitiation' THEN
            json_build_object(
                'major', (gov_action_proposal.description->'contents'->1->>'major')::int, 
                'minor', (gov_action_proposal.description->'contents'->1->>'minor')::int
            )
        ELSE
            NULL
    END AS description,
    epoch_utils.last_epoch_end_time + epoch_utils.epoch_duration * (gov_action_proposal.expiration - epoch_utils.last_epoch_no) AS expiration_time,
    gov_action_proposal.expiration,
    creator_block.time,
    creator_block.epoch_no,
    voting_anchor.url,
    encode(voting_anchor.data_hash, 'hex') AS metadata_hash,
    jsonb_set(
        ROW_TO_JSON(proposal_params)::jsonb,
        '{cost_model}', 
        CASE
            WHEN cost_model.id IS NOT NULL THEN
                ROW_TO_JSON(cost_model)::jsonb
            ELSE
                'null'::jsonb
        END
    ) AS proposal_params,
    off_chain_vote_gov_action_data.title,
    off_chain_vote_gov_action_data.abstract,
    off_chain_vote_gov_action_data.motivation,
    off_chain_vote_gov_action_data.rationale,
    COALESCE(SUM(ldd_drep.amount) FILTER (WHERE voting_procedure.vote::text = 'Yes'), 0) + (
        CASE WHEN gov_action_proposal.type = 'NoConfidence' THEN
            always_no_confidence_voting_power.amount
        ELSE
            0
        END
    ) AS yes_votes,
    COALESCE(SUM(ldd_drep.amount) FILTER (WHERE voting_procedure.vote::text = 'No'), 0) + (
        CASE WHEN gov_action_proposal.type = 'NoConfidence' THEN
            0
        ELSE
            always_no_confidence_voting_power.amount
        END
    ) AS no_votes,
    COALESCE(SUM(ldd_drep.amount) FILTER (WHERE voting_procedure.vote::text = 'Abstain'), 0) + always_abstain_voting_power.amount AS abstain_votes,
    COALESCE(vp_by_pool.poolYesVotes, 0) AS pool_yes_votes,
    COALESCE(vp_by_pool.poolNoVotes, 0) AS pool_no_votes,
    COALESCE(vp_by_pool.poolAbstainVotes, 0) AS pool_abstain_votes,
    COALESCE(vp_by_cc.ccYesVotes, 0) AS cc_yes_votes,
    COALESCE(vp_by_cc.ccNoVotes, 0) AS cc_no_votes,
    COALESCE(vp_by_cc.ccAbstainVotes, 0) AS cc_abstain_votes,
    prev_gov_action.index AS prev_gov_action_index,
    encode(prev_gov_action_tx.hash, 'hex') AS prev_gov_action_tx_hash
FROM
    gov_action_proposal
    LEFT JOIN treasury_withdrawal ON gov_action_proposal.id = treasury_withdrawal.gov_action_proposal_id
    LEFT JOIN stake_address ON stake_address.id = treasury_withdrawal.stake_address_id
    CROSS JOIN EpochUtils AS epoch_utils
    CROSS JOIN always_no_confidence_voting_power
    CROSS JOIN always_abstain_voting_power
    JOIN tx AS creator_tx ON creator_tx.id = gov_action_proposal.tx_id
    JOIN block AS creator_block ON creator_block.id = creator_tx.block_id
    LEFT JOIN voting_anchor ON voting_anchor.id = gov_action_proposal.voting_anchor_id
    LEFT JOIN param_proposal AS proposal_params ON gov_action_proposal.param_proposal = proposal_params.id
    LEFT JOIN cost_model AS cost_model ON proposal_params.cost_model_id = cost_model.id
    LEFT JOIN off_chain_vote_data ON off_chain_vote_data.voting_anchor_id = voting_anchor.id
    LEFT JOIN off_chain_vote_gov_action_data ON off_chain_vote_gov_action_data.off_chain_vote_data_id = off_chain_vote_data.id
    LEFT JOIN voting_procedure ON voting_procedure.gov_action_proposal_id = gov_action_proposal.id
    LEFT JOIN LatestDrepDistr ldd_drep ON ldd_drep.hash_id = voting_procedure.drep_voter AND ldd_drep.rn = 1
    LEFT JOIN (
        SELECT 
            gov_action_proposal_id,
            SUM(CASE WHEN vote = 'Yes' THEN 1 ELSE 0 END) AS poolYesVotes,
            SUM(CASE WHEN vote = 'No' THEN 1 ELSE 0 END) AS poolNoVotes,
            SUM(CASE WHEN vote = 'Abstain' THEN 1 ELSE 0 END) AS poolAbstainVotes
        FROM 
            voting_procedure
        WHERE 
            pool_voter IS NOT NULL
        GROUP BY 
            gov_action_proposal_id
    ) vp_by_pool ON gov_action_proposal.id = vp_by_pool.gov_action_proposal_id
    LEFT JOIN (
        SELECT 
            gov_action_proposal_id,
            SUM(CASE WHEN vote = 'Yes' THEN 1 ELSE 0 END) AS ccYesVotes,
            SUM(CASE WHEN vote = 'No' THEN 1 ELSE 0 END) AS ccNoVotes,
            SUM(CASE WHEN vote = 'Abstain' THEN 1 ELSE 0 END) AS ccAbstainVotes
        FROM 
            voting_procedure
        WHERE 
            committee_voter IS NOT NULL
        GROUP BY 
            gov_action_proposal_id
    ) vp_by_cc ON gov_action_proposal.id = vp_by_cc.gov_action_proposal_id
    LEFT JOIN LatestDrepDistr ldd_cc ON ldd_cc.hash_id = voting_procedure.committee_voter AND ldd_cc.rn = 1
    LEFT JOIN gov_action_proposal AS prev_gov_action ON gov_action_proposal.prev_gov_action_proposal = prev_gov_action.id
    LEFT JOIN tx AS prev_gov_action_tx ON prev_gov_action.tx_id = prev_gov_action_tx.id
WHERE
    -- Search by text or proposalId (concatenation of tx hash and index)
    (COALESCE($1, '') = '' OR
     off_chain_vote_gov_action_data.title ILIKE $1 OR
     off_chain_vote_gov_action_data.abstract ILIKE $1 OR
     off_chain_vote_gov_action_data.motivation ILIKE $1 OR
     off_chain_vote_gov_action_data.rationale ILIKE $1 OR
     concat(encode(creator_tx.hash, 'hex'), '#', gov_action_proposal.index) ILIKE $1)

    -- Handle drepId filtering explicitly by casting it AS bigint if not null
    AND ($2::bigint IS NULL OR voting_procedure.drep_voter = $2::bigint)

    -- Filter by type
    AND ($4::text IS NULL OR gov_action_proposal.type::text = $4::text)

    -- Only show proposals that have not yet been finalized
    AND gov_action_proposal.expiration > (SELECT Max(NO) FROM epoch)
    AND gov_action_proposal.ratified_epoch IS NULL
    AND gov_action_proposal.enacted_epoch IS NULL
    AND gov_action_proposal.expired_epoch IS NULL
    AND gov_action_proposal.dropped_epoch IS NULL

GROUP BY
    gov_action_proposal.id,
    stake_address.view,
    treasury_withdrawal.amount,
    creator_block.epoch_no,
    off_chain_vote_gov_action_data.title,
    off_chain_vote_gov_action_data.abstract,
    off_chain_vote_gov_action_data.motivation,
    off_chain_vote_gov_action_data.rationale,
    vp_by_pool.poolYesVotes,
    vp_by_pool.poolNoVotes,
    vp_by_pool.poolAbstainVotes,
    vp_by_cc.ccYesVotes,
    vp_by_cc.ccNoVotes,
    vp_by_cc.ccAbstainVotes,
    gov_action_proposal.index,
    creator_tx.hash,
    creator_block.time,
    epoch_utils.epoch_duration,
    epoch_utils.last_epoch_no,
    epoch_utils.last_epoch_end_time,
    proposal_params,
    voting_anchor.url,
    voting_anchor.data_hash,
    always_no_confidence_voting_power.amount,
    always_abstain_voting_power.amount,
    prev_gov_action.index,
    prev_gov_action_tx.hash
-- Use the full expression for yes_votes in ORDER BY
ORDER BY
    CASE WHEN $3 = 'SoonestToExpire' THEN gov_action_proposal.expiration END ASC,
    CASE WHEN $3 = 'NewestCreated' THEN creator_block.time END DESC,
    CASE WHEN $3 = 'MostYesVotes' THEN (COALESCE(SUM(ldd_drep.amount) FILTER (WHERE voting_procedure.vote::text = 'Yes'), 0) + (
        CASE WHEN gov_action_proposal.type = 'NoConfidence' THEN
            always_no_confidence_voting_power.amount
        ELSE
            0
        END
    )) END DESC