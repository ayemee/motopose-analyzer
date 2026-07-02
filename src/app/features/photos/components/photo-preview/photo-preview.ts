import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-photo-preview',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './photo-preview.html',
  styleUrl: './photo-preview.less',
})
export class PhotoPreview {
  @Input() file: File | null = null;

  createObjectURL(file: File | null): string {
    if (!file) {
      return 'images/hondo-rr.png';
    }
    return URL.createObjectURL(file);
  }
}
