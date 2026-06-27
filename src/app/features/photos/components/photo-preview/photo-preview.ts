import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-photo-preview',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './photo-preview.html',
  styleUrl: './photo-preview.less',
})
export class PhotoPreview {
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
