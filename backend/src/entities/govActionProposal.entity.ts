import { Entity, Column, PrimaryColumn, OneToOne } from 'typeorm';

@Entity('gov_action_proposal')
export class GovActionProposal {
  @PrimaryColumn()
  id: number;

  @Column()
  tx_id: number;

  @Column()
  index: number;

  @Column()
  @OneToOne(
    () => GovActionProposal,
    (govActionProposal) => govActionProposal.id,
  )
  prev_gov_action_proposal: number;

  @Column()
  deposit: number;

  @Column()
  return_address: number;

  @Column()
  expiration: number;

  @Column()
  voting_anchor_id: number;

  @Column()
  type: string;

  @Column()
  description: string;

  @Column()
  param_proposal: number;

  @Column()
  ratified_epoch: number;

  @Column()
  enacted_epoch: number;

  @Column()
  dropped_epoch: number;

  @Column()
  expired_epoch: number;
}
