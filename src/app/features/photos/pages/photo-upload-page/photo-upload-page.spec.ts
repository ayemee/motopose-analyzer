import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoUploadPage } from './photo-upload-page';

describe('PhotoUploadPage', () => {
  let component: PhotoUploadPage;
  let fixture: ComponentFixture<PhotoUploadPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoUploadPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoUploadPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
