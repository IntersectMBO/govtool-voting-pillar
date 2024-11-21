import { FC, PropsWithChildren } from 'react';
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
    buildSignSubmitConwayCertTx: ({ certBuilder, govActionBuilder, resourceId, type, votingBuilder, voter, }: BuildSignSubmitConwayCertTxArgs) => Promise<string>;
    buildVote: (voteChoice: string, txHash: string, index: number, cip95MetadataURL?: string, cip95MetadataHash?: string) => Promise<unknown>;
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
export declare const PillarProvider: FC<PillarProviderProps & PropsWithChildren>;
export declare const usePillarContext: () => PillarContextType;
export {};
