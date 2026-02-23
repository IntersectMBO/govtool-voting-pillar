SELECT
  gov_action_proposal.id AS proposal_db_id,
  gov_action_proposal.type::text AS proposal_type,
  encode(creator_tx.hash, 'hex') AS tx_hash,
  gov_action_proposal.index AS proposal_index,
  creator_block.slot_no AS creator_slot,
  creator_block.epoch_no AS creator_epoch,
  gov_action_proposal.expiration AS expiration_epoch,
  off_chain_vote_data.json AS anchor_json,
  meta.network_name::text AS network_name,
  COALESCE(latest_epoch_param.gov_action_lifetime, 0) AS gov_action_lifetime
FROM gov_action_proposal
JOIN tx AS creator_tx ON creator_tx.id = gov_action_proposal.tx_id
JOIN block AS creator_block ON creator_block.id = creator_tx.block_id
LEFT JOIN voting_anchor ON voting_anchor.id = gov_action_proposal.voting_anchor_id
LEFT JOIN off_chain_vote_data ON off_chain_vote_data.voting_anchor_id = voting_anchor.id
CROSS JOIN meta
LEFT JOIN LATERAL (
  SELECT ep.gov_action_lifetime
  FROM epoch_param ep
  ORDER BY ep.epoch_no DESC
  LIMIT 1
) latest_epoch_param ON true
WHERE encode(creator_tx.hash, 'hex') = LOWER($1)
  AND gov_action_proposal.index = $2
LIMIT 1;
