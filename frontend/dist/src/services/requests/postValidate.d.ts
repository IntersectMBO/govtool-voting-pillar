import type { MetadataValidationDTO, ValidateMetadataResult } from '../../models';
export declare const postValidate: <MetadataType>(url: string, body: MetadataValidationDTO) => Promise<ValidateMetadataResult<MetadataType>>;
