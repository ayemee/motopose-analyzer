import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-photo-preview',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './photo-preview.html',
  styleUrl: './photo-preview.less',
})
export class PhotoPreview implements OnChanges, OnDestroy {
  @Input() file: File | null = null;
  previewURL: string = 'images/hondo-rr.png';

  ngOnChanges(): void {
    if (this.file) {
      this.previewURL = URL.createObjectURL(this.file);
    }
  }

  ngOnDestroy(): void {
    if (this.previewURL && this.previewURL !== 'images/hondo-rr.png') {
      URL.revokeObjectURL(this.previewURL);
    }
  }
}
