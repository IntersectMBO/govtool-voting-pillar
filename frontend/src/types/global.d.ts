type ActionDetailsType = {
  [key: string]: string | number;
};

type VoteType = 'yes' | 'no' | 'abstain';

type Reference = {
  '@type': string;
  label: string;
  uri: string;
};

type WalletApi = {
  address?: string;
  disconnectWallet: () => Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getChangeAddress: (enabledApi: WalletApi) => Promise<any>;
  enable: (walletName: string) => Promise<EnableResponse>;
  isEnableLoading: string | null;
  error?: string;
  isEnabled: boolean;
  pubDRepKey: string;
  dRepID: string;
  dRepIDBech32: string;
  isMainnet: boolean;
  stakeKey?: string;
  setStakeKey: (key: string) => void;
  stakeKeys: string[];
  buildSignSubmitConwayCertTx: ({
    certBuilder,
    govActionBuilder,
    resourceId,
    type,
    votingBuilder,
    voter,
  }: BuildSignSubmitConwayCertTxArgs) => Promise<string>;
  buildDRepRegCert: (url?: string, hash?: string) => Promise<Certificate>;
  buildVoteDelegationCert: (vote: string) => Promise<CertificatesBuilder>;
  buildDRepUpdateCert: (url?: string, hash?: string) => Promise<Certificate>;
  buildDRepRetirementCert: (voterDeposit: string) => Promise<Certificate>;
  buildVote: (
    voteChoice: string,
    txHash: string,
    index: number,
    cip95MetadataURL?: string,
    cip95MetadataHash?: string
  ) => Promise<VotingBuilder>;
  pendingTransaction: PendingTransaction;
  isPendingTransaction: () => boolean;
  buildNewInfoGovernanceAction: (
    infoProps: InfoProps
  ) => Promise<VotingProposalBuilder | undefined>;
  buildTreasuryGovernanceAction: (
    treasuryProps: TreasuryProps
  ) => Promise<VotingProposalBuilder | undefined>;
  buildProtocolParameterChangeGovernanceAction: (
    protocolParamsProps: ProtocolParameterChangeProps
  ) => Promise<VotingProposalBuilder | undefined>;
  buildHardForkGovernanceAction: (
    hardForkInitiationProps: HardForkInitiationProps
  ) => Promise<VotingProposalBuilder | undefined>;
};

type ToVoteDataType = {
  title: string;
  actions: ActionTypeToDisplay[];
}[];

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
