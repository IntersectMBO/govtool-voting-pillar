/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// TODO: Implement the following functions
// {openFeedbackWindow} = useUsersnapApi();
// const { isVotingOnGovernanceActionEnabled } = useFeatureFlag();
// const { epochParams } = useAppContext();
// const { addSuccessAlert } = useSnackbar();

import { createContext, FC, useMemo, useContext } from 'react';

type BuildSignSubmitConwayCertTxArgs = {
  certBuilder?: unknown;
  govActionBuilder?: unknown;
  votingBuilder?: unknown;
  voter?: ReturnType<typeof useGetVoterInfo>['voter'];
  type: string;
  resourceId: string;
};

type WalletApi = {
  dRepID: string;
  pendingTransaction: {
    vote?: {
      transactionHash: string;
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
  isEnabled: boolean;
  openFeedbackWindow: () => void;
  isVotingOnGovernanceActionEnabled: (proposalType: string) => boolean;
  epochParams: unknown;
  addSuccessAlert: (message: string) => void;
  validateMetadata: (url: string, hash: string) => void;
  generateMetadata: () => void;
  createJsonLD: (data: unknown) => void;
  createHash: (json: unknown) => string;
  voter: ReturnType<typeof useGetVoterInfo>['voter'];
} & WalletApi;

const PillarContext = createContext<PillarContextType | undefined>(undefined);

type PillarProps = {
  children: React.ReactNode;
  walletApi: WalletApi | null;
  apiUrl?: string;
  validationApiUrl?: string;
};

export const PillarProvider: FC<PillarProps> = ({
  children,
  apiUrl,
  walletApi,
  validationApiUrl,
}) => {
  const { voter } = useGetVoterInfo();
  const contextValue = useMemo(
    () => ({
      apiUrl: apiUrl || process.env.API_URL,
      validationApiUrl: validationApiUrl || process.env.VALIDATION_API_URL,
      isEnabled: true,
      openFeedbackWindow: () => {},
      isVotingOnGovernanceActionEnabled: (proposalType) => !!proposalType,
      epochParams: null,
      addSuccessAlert: () => {},
      validateMetadata: (url: string, hash: string) => {},
      generateMetadata: () => {},
      createJsonLD: (data: unknown) => {},
      createHash: (json: unknown) => '',
      voter,
      ...(walletApi || {}),
    }),
    [apiUrl, voter, walletApi, validationApiUrl]
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

// Mocked hook
const useGetVoterInfo = () => {
  return {
    voter: {
      dRepRegisterTxHash: null,
      dRepRetireTxHash: null,
      deposit: 0,
      givenName: null,
      imageHash: null,
      imageUrl: null,
      isRegisteredAsDRep: false,
      isRegisteredAsSoleVoter: false,
      motivations: null,
      objectives: null,
      paymentAddress: null,
      qualifications: null,
      soleVoterRegisterTxHash: null,
      soleVoterRetireTxHash: null,
      url: null,
      votingPower: 0,
      wasRegisteredAsDRep: false,
      wasRegisteredAsSoleVoter: false,
    },
  };
};
