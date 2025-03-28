'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  FC,
  useMemo,
  useContext,
  PropsWithChildren,
} from 'react';
import { ThemeProvider } from '@emotion/react';
import { QueryClientProvider, QueryClient } from 'react-query';
import * as jsonld from 'jsonld';

import { DataActionsBarProvider } from './dataActionsBar';
import { voltaireTheme } from '../theme';

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
  addSuccessAlert: (message: string, autoHideDuration?: number) => void;
  validateMetadata: (body: { url: string; hash: string }) => Promise<void>;
  generateJsonld: <
    T extends Record<string, JSONValue>,
    C extends jsonld.ContextDefinition,
  >(
    body: T,
    context: C,
    bodyCip?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => Promise<any>;
  createHash: (json: jsonld.NodeObject) => Promise<string>;
  voter?: VoterInfo;
  useLocation: () => {
    pathname: string;
    search: string;
    hash: string;
    state: any;
    key: any;
    readonly href: string;
  };
  useParams: (routePattern: any) => any;
  useNavigate: () => (to: any, options?: any) => void;
  generatePath: (
    path: string,
    params?: Record<string, string | number>
  ) => string;
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
  addSuccessAlert: (message: string, autoHideDuration?: number) => void;
  validateMetadata: (body: { url: string; hash: string }) => Promise<void>;
  generateJsonld: <
    T extends Record<string, JSONValue>,
    C extends jsonld.ContextDefinition,
  >(
    body: T,
    context: C,
    bodyCip?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => Promise<any>;
  createHash: (json: jsonld.NodeObject) => Promise<string>;
  voter?: VoterInfo;
  routePath?: string;
  useLocation: () => {
    pathname: string;
    search: string;
    hash: string;
    state: any;
    key: any;
    readonly href: string;
  };
  useParams: (routePattern: any) => any;
  useNavigate: () => (to: any, options?: any) => void;
  generatePath: (
    path: string,
    params?: Record<string, string | number>
  ) => string;
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
  generateJsonld,
  createHash,
  voter,
  routePath,
  useLocation,
  useParams,
  useNavigate,
  generatePath,
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
      generateJsonld,
      createHash,
      voter,
      routePath,
      useLocation,
      useParams,
      useNavigate,
      generatePath,
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
      generateJsonld,
      createHash,
      voter,
      walletApi,
      cExplorerBaseUrl,
      routePath,
      useLocation,
      useParams,
      useNavigate,
      generatePath,
    ]
  );

  return (
    <PillarContext.Provider value={contextValue}>
      <QueryClientProvider client={new QueryClient()}>
        <DataActionsBarProvider>{children}</DataActionsBarProvider>
      </QueryClientProvider>
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
