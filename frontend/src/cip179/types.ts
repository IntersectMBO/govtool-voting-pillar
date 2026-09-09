import type { Metadatum } from 'cip-179';

export interface Cip179MetadatumCodec {
  metadatumToCbor(value: Metadatum): Uint8Array;
  cborToMetadatum(bytes: Uint8Array): Metadatum;
}
