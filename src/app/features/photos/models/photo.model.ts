// features/photos/models/photo.model.ts
export interface Photo {
  id: number;
  fileName: string;
  filePath: string;
  uploadDate: string;
  riderName?: string;
  notes?: string;
}
