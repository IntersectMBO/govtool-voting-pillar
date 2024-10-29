import {
  createContext,
  FC,
  useMemo,
  useContext,
  PropsWithChildren,
} from 'react';

export type VoterInfo = {
  dRepRegisterTxHash: string | null;
  dRepRetireTxHash: string | null;
  deposit: number;
  givenName: string | null;
  imageHash: string | null;
  imageUrl: string | null;
  isRegisteredAsDRep: boolean;
  isRegisteredAsSoleVoter: boolean;
  motivations: string | null;
  objectives: string | null;
  paymentAddress: string | null;
  qualifications: string | null;
  soleVoterRegisterTxHash: string | null;
  soleVoterRetireTxHash: string | null;
  url: string | null;
  votingPower: number | null;
  wasRegisteredAsDRep: boolean;
  wasRegisteredAsSoleVoter: boolean;
};

type BuildSignSubmitConwayCertTxArgs = {
  certBuilder?: unknown;
  govActionBuilder?: unknown;
  votingBuilder?: unknown;
  voter?: VoterInfo;
  type: string;
  resourceId: string;
};

type WalletApi = {
  isEnabled?: boolean;
  dRepID?: string;
  pendingTransaction: {
    vote?: {
      transactionHash: string;
      resourceId?: string;
    };
  };
  buildSignSubmitConwayCertTx: ({
    certBuilder,
    govActionBuilder,
    resourceId,
    type,
    votingBuilder,
    voter,
  }: BuildSignSubmitConwayCertTxArgs) => Promise<string>;
  buildVote: (
    voteChoice: string,
    txHash: string,
    index: number,
    cip95MetadataURL?: string,
    cip95MetadataHash?: string
  ) => Promise<unknown>;
  isPendingTransaction: () => boolean;
};

type PillarContextType = {
  apiUrl: string;
  validationApiUrl: string;
  cExplorerBaseUrl: string;
  openFeedbackWindow: () => void;
  isVotingOnGovernanceActionEnabled: (proposalType: string) => boolean;
  epochParams: unknown;
  addSuccessAlert: (message: string) => void;
  validateMetadata: (url: string, hash: string) => void;
  generateMetadata: () => void;
  createJsonLD: (data: unknown) => void;
  createHash: (json: unknown) => string;
  voter?: VoterInfo;
} & Partial<WalletApi>;

const PillarContext = createContext<PillarContextType | undefined>(undefined);

export type PillarProviderProps = {
  walletApi: WalletApi | null;
  apiUrl: string;
  validationApiUrl: string;
  cExplorerBaseUrl: string;
  openFeedbackWindow: () => void;
  isVotingOnGovernanceActionEnabled: (proposalType: string) => boolean;
  epochParams: unknown;
  addSuccessAlert: (message: string) => void;
  validateMetadata: (url: string, hash: string) => void;
  generateMetadata: () => void;
  createJsonLD: (data: unknown) => void;
  createHash: (json: unknown) => string;
  voter?: VoterInfo;
};

export const PillarProvider: FC<PillarProviderProps & PropsWithChildren> = ({
  children,
  apiUrl,
  walletApi,
  validationApiUrl,
  cExplorerBaseUrl,
  openFeedbackWindow,
  isVotingOnGovernanceActionEnabled,
  epochParams,
  addSuccessAlert,
  validateMetadata,
  generateMetadata,
  createJsonLD,
  createHash,
  voter,
}) => {
  const contextValue = useMemo(
    () => ({
      apiUrl,
      validationApiUrl,
      cExplorerBaseUrl,
      openFeedbackWindow,
      isVotingOnGovernanceActionEnabled,
      epochParams,
      addSuccessAlert,
      validateMetadata,
      generateMetadata,
      createJsonLD,
      createHash,
      voter,
      ...(walletApi || {}),
    }),
    [
      apiUrl,
      validationApiUrl,
      openFeedbackWindow,
      isVotingOnGovernanceActionEnabled,
      epochParams,
      addSuccessAlert,
      validateMetadata,
      generateMetadata,
      createJsonLD,
      createHash,
      voter,
      walletApi,
      cExplorerBaseUrl,
    ]
  );

  return (
    <PillarContext.Provider value={contextValue}>
      {children}
    </PillarContext.Provider>
  );
};

export const usePillarContext = (): PillarContextType => {
  const context = useContext(PillarContext);
  if (context === undefined) {
    throw new Error('usePillarContext must be used within a PillarProvider');
  }
  return context;
};
