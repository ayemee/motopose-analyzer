import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { PhotoPreview } from '../photo-preview/photo-preview';
import { UploadPhotoRequest } from '../../models/upload-photo-request.model';
@Component({
  selector: 'app-photo-upload-form',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    PhotoPreview,
  ],
  templateUrl: './photo-upload-form.html',
  styleUrl: './photo-upload-form.less',
})
export class PhotoUploadForm {
  riderName = '';
  notes = '';

  selectedFile: File | null = null;

  @Output() upload = new EventEmitter<UploadPhotoRequest>();

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    const file = input.files[0];

    if (!file.type.startsWith('image/')) {
      return;
    }

    this.selectedFile = file;
  }

  onSubmit(): void {
    if (!this.selectedFile) {
      return;
    }

    this.upload.emit({
      riderName: this.riderName,
      notes: this.notes,
      file: this.selectedFile,
    });
  }
}
