import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-photo-upload-form',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './photo-upload-form.html',
  styleUrl: './photo-upload-form.less',
})
export class PhotoUploadForm {
  previewUrl = 'images/lean-hondo-placeholder.png';

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    const file = input.files[0];

    if (!file.type.startsWith('image/')) {
      return;
    }

    this.previewUrl = URL.createObjectURL(file);
  }
}
