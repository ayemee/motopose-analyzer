import { Routes } from '@angular/router';

import { WelcomePage } from './pages/welcome-page/welcome-page';
import { PhotoUploadPage } from './pages/photo-upload-page/photo-upload-page';
import { PhotoGalleryPage } from './pages/photo-gallery-page/photo-gallery-page';
import { PhotoDetailPage } from './pages/photo-detail-page/photo-detail-page';

export const PHOTO_ROUTES: Routes = [
  {
    path: '',
    component: WelcomePage,
  },
  {
    path: 'upload',
    component: PhotoUploadPage,
  },
  {
    path: 'photos',
    component: PhotoGalleryPage,
  },
  {
    path: 'photos/:id',
    component: PhotoDetailPage,
  },
];
