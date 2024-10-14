export enum MetadataValidationStatus {
  URL_NOT_FOUND = 'URL_NOT_FOUND',
  INVALID_JSONLD = 'INVALID_JSONLD',
  INVALID_HASH = 'INVALID_HASH',
  INCORRECT_FORMAT = 'INCORRECT_FORMAT',
}

export type ValidateMetadataResult<MetadataType> = {
  status?: MetadataValidationStatus;
  valid: boolean;
  metadata?: MetadataType;
};

export type MetadataValidationDTO = {
  url: string;
  hash: string;
};

export type ProposalMetadata = {
  abstract?: string;
  motivation?: string;
  rationale?: string;
  references?: Reference[];
  title?: string;
};
