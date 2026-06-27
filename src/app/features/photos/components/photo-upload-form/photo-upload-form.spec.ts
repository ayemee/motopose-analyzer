import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoUploadForm } from './photo-upload-form';

describe('PhotoUploadForm', () => {
  let component: PhotoUploadForm;
  let fixture: ComponentFixture<PhotoUploadForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoUploadForm],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoUploadForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
