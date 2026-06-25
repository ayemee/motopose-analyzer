// features/photos/models/upload-photo-request.model.ts
export interface UploadPhotoRequest {
  file: File;
  riderName?: string;
  notes?: string;
}
