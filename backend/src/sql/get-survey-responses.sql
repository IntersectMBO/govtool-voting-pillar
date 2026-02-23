WITH LatestDrepDistr AS (
  SELECT
    *,
    ROW_NUMBER() OVER (PARTITION BY hash_id ORDER BY epoch_no DESC) AS rn
  FROM drep_distr
)
SELECT
  tx_metadata.id AS metadata_id,
  tx_metadata.json AS metadata_json,
  block.slot_no AS slot_no,
  tx.block_index AS tx_index,
  voting_procedure.id AS voting_procedure_id,
  encode(drep_hash.raw, 'hex') AS response_credential,
  COALESCE(ldd.amount, 0) AS drep_voting_power
FROM tx_metadata
JOIN tx ON tx.id = tx_metadata.tx_id
JOIN block ON block.id = tx.block_id
JOIN voting_procedure ON voting_procedure.tx_id = tx.id
JOIN drep_hash ON drep_hash.id = voting_procedure.drep_voter
LEFT JOIN LatestDrepDistr ldd
  ON ldd.hash_id = voting_procedure.drep_voter
 AND ldd.rn = 1
WHERE tx_metadata.key = 17
  AND tx_metadata.json ? 'surveyResponse'
  AND LOWER(tx_metadata.json->'surveyResponse'->>'surveyTxId') = LOWER($1)
  AND LOWER(tx_metadata.json->'surveyResponse'->>'surveyHash') = LOWER($2)
  AND voting_procedure.gov_action_proposal_id = $3
  AND voting_procedure.drep_voter IS NOT NULL
ORDER BY
  response_credential,
  slot_no DESC,
  tx_index DESC,
  metadata_id DESC,
  voting_procedure_id DESC;
