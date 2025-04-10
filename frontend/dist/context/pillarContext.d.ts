import { FC, PropsWithChildren } from 'react';
import * as jsonld from 'jsonld';
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
    addSuccessAlert: (message: string, autoHideDuration?: number) => void;
    validateMetadata: (body: {
        url: string;
        hash: string;
    }) => Promise<void>;
    generateJsonld: <T extends Record<string, JSONValue>, C extends jsonld.ContextDefinition>(body: T, context: C, bodyCip?: string) => Promise<any>;
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
    generatePath: (path: string, params?: Record<string, string | number>) => string;
    useRouter: () => {
        push: (href: any) => void;
        replace: (href: any) => void;
        prefetch: (href: any) => void;
        back: () => void;
        forward: () => void;
        refresh: () => void;
    };
} & Partial<WalletApi>;
export type PillarProviderProps = {
    walletApi: WalletApi | null;
    apiUrl: string;
    validationApiUrl: string;
    cExplorerBaseUrl: string;
    openFeedbackWindow: () => void;
    isVotingOnGovernanceActionEnabled: (proposalType: string) => boolean;
    epochParams: unknown;
    addSuccessAlert: (message: string, autoHideDuration?: number) => void;
    validateMetadata: (body: {
        url: string;
        hash: string;
    }) => Promise<void>;
    generateJsonld: <T extends Record<string, JSONValue>, C extends jsonld.ContextDefinition>(body: T, context: C, bodyCip?: string) => Promise<any>;
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
    generatePath: (path: string, params?: Record<string, string | number>) => string;
    useRouter: () => {
        push: (href: any) => void;
        replace: (href: any) => void;
        prefetch: (href: any) => void;
        back: () => void;
        forward: () => void;
        refresh: () => void;
    };
};
export declare const PillarProvider: FC<PillarProviderProps & PropsWithChildren>;
export declare const usePillarContext: () => PillarContextType;
export {};
