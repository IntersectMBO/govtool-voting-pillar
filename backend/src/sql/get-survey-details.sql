SELECT
  encode(tx.hash, 'hex') AS survey_tx_hash,
  block.slot_no AS survey_slot,
  tx_metadata.id AS metadata_id,
  tx_metadata.json AS metadata_json
FROM tx
JOIN block ON block.id = tx.block_id
JOIN tx_metadata ON tx_metadata.tx_id = tx.id
WHERE encode(tx.hash, 'hex') = LOWER($1)
  AND tx_metadata.key = 17
ORDER BY tx_metadata.id ASC;
