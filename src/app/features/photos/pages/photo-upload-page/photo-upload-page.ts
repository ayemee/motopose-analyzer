import { Component } from '@angular/core';
import { PhotoUploadForm } from '../../components/photo-upload-form/photo-upload-form';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-photo-upload-page',
  imports: [PhotoUploadForm, MatCardModule],
  templateUrl: './photo-upload-page.html',
  styleUrl: './photo-upload-page.less',
})
export class PhotoUploadPage {}
