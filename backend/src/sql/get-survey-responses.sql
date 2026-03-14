WITH LatestDrepDistr AS (
  SELECT
    drep_distr.*,
    ROW_NUMBER() OVER (PARTITION BY hash_id ORDER BY epoch_no DESC) AS rn
  FROM drep_distr
  WHERE epoch_no <= $3
),
LatestPoolStat AS (
  SELECT
    pool_stat.*,
    ROW_NUMBER() OVER (PARTITION BY pool_hash_id ORDER BY epoch_no DESC) AS rn
  FROM pool_stat
  WHERE epoch_no <= $3
),
ActiveCommittee AS (
  SELECT DISTINCT
    cm.committee_hash_id
  FROM committee_member cm
  JOIN committee c ON c.id = cm.committee_id
  LEFT JOIN gov_action_proposal gap ON gap.id = c.gov_action_proposal_id
  WHERE cm.expiration_epoch >= $3
    AND (
      c.gov_action_proposal_id IS NULL
      OR (gap.enacted_epoch IS NOT NULL AND gap.enacted_epoch <= $3)
    )
)
SELECT
  tx_metadata.id AS metadata_id,
  tx_metadata.json AS metadata_json,
  block.slot_no AS slot_no,
  block.epoch_no AS epoch_no,
  tx.block_index AS tx_index,
  tx.id AS tx_id,
  COALESCE(vp_summary.voting_procedure_count, 0) AS voting_procedure_count,
  vp_summary.voter_role AS voter_role,
  COALESCE(vp_summary.response_credential, '') AS response_credential,
  vp_summary.drep_voting_power AS drep_voting_power,
  vp_summary.pool_voting_power AS pool_voting_power,
  vp_summary.cc_active_at_end_epoch AS cc_active_at_end_epoch
FROM tx_metadata
JOIN tx ON tx.id = tx_metadata.tx_id
JOIN block ON block.id = tx.block_id
LEFT JOIN LATERAL (
  SELECT
    COUNT(*) AS voting_procedure_count,
    CASE
      WHEN COUNT(*) = 1 AND BOOL_OR(vp.drep_voter IS NOT NULL) THEN 'DRep'
      WHEN COUNT(*) = 1 AND BOOL_OR(vp.pool_voter IS NOT NULL) THEN 'SPO'
      WHEN COUNT(*) = 1 AND BOOL_OR(vp.committee_voter IS NOT NULL) THEN 'CC'
      ELSE NULL
    END AS voter_role,
    CASE
      WHEN COUNT(*) = 1 AND MAX(vp.drep_voter) IS NOT NULL THEN encode(MAX(dh.raw), 'hex')
      WHEN COUNT(*) = 1 AND MAX(vp.pool_voter) IS NOT NULL THEN MAX(vp.pool_voter)::text
      WHEN COUNT(*) = 1 AND MAX(vp.committee_voter) IS NOT NULL THEN encode(MAX(ch.raw), 'hex')
      ELSE NULL
    END AS response_credential,
    MAX(ldd.amount) AS drep_voting_power,
    MAX(lps.voting_power) AS pool_voting_power,
    CASE
      WHEN COUNT(*) = 1 AND MAX(vp.committee_voter) IS NOT NULL
      THEN BOOL_OR(ac.committee_hash_id IS NOT NULL)
      ELSE NULL
    END AS cc_active_at_end_epoch
  FROM voting_procedure vp
  LEFT JOIN drep_hash dh ON dh.id = vp.drep_voter
  LEFT JOIN committee_hash ch ON ch.id = vp.committee_voter
  LEFT JOIN LatestDrepDistr ldd
    ON ldd.hash_id = vp.drep_voter
   AND ldd.rn = 1
  LEFT JOIN LatestPoolStat lps
    ON lps.pool_hash_id = vp.pool_voter
   AND lps.rn = 1
  LEFT JOIN ActiveCommittee ac
    ON ac.committee_hash_id = vp.committee_voter
  WHERE vp.tx_id = tx.id
    AND vp.gov_action_proposal_id = $2
) vp_summary ON true
WHERE tx_metadata.key = 17
  AND tx_metadata.json ? 'surveyResponse'
  AND LOWER(tx_metadata.json->'surveyResponse'->>'surveyTxId') = LOWER($1)
  AND COALESCE(vp_summary.voting_procedure_count, 0) > 0
ORDER BY
  COALESCE(vp_summary.response_credential, ''),
  block.slot_no DESC,
  tx.block_index DESC,
  tx_metadata.id DESC;
