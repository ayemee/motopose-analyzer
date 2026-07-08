import { inject, Injectable } from '@angular/core';
import { UploadPhotoRequest } from '../models/upload-photo-request.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PhotoApiService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/photos`;
  uploadPhoto(request: UploadPhotoRequest) {
    const formData = new FormData();

    formData.append('file', request.file);
    formData.append('riderName', request.riderName);
    formData.append('notes', request.notes);

    return this.http.post(this.apiUrl, formData);
  }
}
