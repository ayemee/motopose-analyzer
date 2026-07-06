import { Component } from '@angular/core';
import { PhotoUploadForm } from '../../components/photo-upload-form/photo-upload-form';
import { MatCardModule } from '@angular/material/card';
import { PhotoApiService } from '../../services/photo-api';
import { UploadPhotoRequest } from '../../models/upload-photo-request.model';

@Component({
  selector: 'app-photo-upload-page',
  imports: [PhotoUploadForm, MatCardModule],
  templateUrl: './photo-upload-page.html',
  styleUrl: './photo-upload-page.less',
})
export class PhotoUploadPage {
  constructor(private photoApiService: PhotoApiService) {}

  onUpload(event: UploadPhotoRequest): void {
    this.photoApiService.uploadPhoto(event).subscribe({
      next: (response) => console.log('Uploaded:', response),
      error: (error) => console.error('Upload failed:', error),
    });
  }
}
