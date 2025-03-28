export declare const CIP_100_CONTEXT: {
    CIP100: string;
    hashAlgorithm: string;
    body: {
        '@id': string;
        '@context': {
            references: {
                '@id': string;
                '@container': "@set";
                '@context': {
                    GovernanceMetadata: string;
                    Other: string;
                    label: string;
                    uri: string;
                    referenceHash: {
                        '@id': string;
                        '@context': {
                            hashDigest: string;
                            hashAlgorithm: string;
                        };
                    };
                };
            };
            comment: string;
            externalUpdates: {
                '@id': string;
                '@context': {
                    title: string;
                    uri: string;
                };
            };
        };
    };
    authors: {
        '@id': string;
        '@container': "@set";
        '@context': {
            name: string;
            witness: {
                '@id': string;
                '@context': {
                    witnessAlgorithm: string;
                    publicKey: string;
                    signature: string;
                };
            };
        };
    };
};
