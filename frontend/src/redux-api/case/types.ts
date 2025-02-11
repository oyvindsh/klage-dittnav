import { ISODate, ISODateTime } from '@app/domain/date/date';
import { Languages } from '@app/language/types';

export interface UploadAttachmentParams {
  file: File;
  caseId: string;
}

export interface DeleteAttachmentParams {
  caseId: string;
  attachmentId: number;
}

export enum CaseStatus {
  OPEN = 'OPEN',
  DRAFT = 'DRAFT',
  DOWNLOADED = 'DOWNLOADED',
  DONE = 'DONE',
  DELETED = 'DELETED',
}

export interface FinalizedCase {
  readonly finalizedDate: ISODate;
  readonly modifiedByUser: ISODateTime;
}

export interface Case {
  readonly id: string;
  readonly finalizedDate: ISODate | null;
  readonly modifiedByUser: ISODateTime;
  readonly status: CaseStatus;
  readonly journalpostId: string | null;
  readonly userSaksnummer: string | null;
  readonly internalSaksnummer: string | null;
  readonly fritekst: string;
  readonly vedtakDate: ISODate | null;
  readonly vedlegg: Attachment[];
  readonly hasVedlegg: boolean;
  readonly language: Languages;
}

export interface Attachment {
  readonly contentType: string; // Default value is "Ukjent" in backend.
  readonly id: number;
  readonly sizeInBytes: number;
  readonly tittel: string;
}
