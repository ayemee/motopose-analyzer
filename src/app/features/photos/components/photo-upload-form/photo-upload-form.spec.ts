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

  //check if file is updated when selecting a file
  it('should update selectedFile when a file is selected', () => {
    const file = new File([''], 'test.jpg', { type: 'image/jpeg' });
    const event = { target: { files: [file] } } as unknown as Event;
    component.onFileSelected(event);
    expect(component.selectedFile).toBe(file);
  });
});
