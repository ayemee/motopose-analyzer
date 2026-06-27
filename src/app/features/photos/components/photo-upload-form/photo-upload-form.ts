import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { PhotoPreview } from '../photo-preview/photo-preview';
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

  onSubmit(): void {
    console.log({
      riderName: this.riderName,
      notes: this.notes,
    });
  }
}
