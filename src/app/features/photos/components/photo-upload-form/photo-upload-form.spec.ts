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

  it('should update selectedFile when a file is selected', () => {
    const file = new File([''], 'test.jpg', { type: 'image/jpeg' });
    const event = { target: { files: [file] } } as unknown as Event;
    component.onFileSelected(event);
    expect(component.selectedFile).toBe(file);
  });

  it('should set selectedFile to null when no file is selected', () => {
    const event = { target: { files: [] } } as unknown as Event;
    component.onFileSelected(event);
    expect(component.selectedFile).toBeNull();
  });

  it('should not update selectedFile when a non-image file is selected', () => {
    const file = new File([''], 'test.txt', { type: 'text/plain' });
    const event = { target: { files: [file] } } as unknown as Event;
    component.onFileSelected(event);
    expect(component.selectedFile).toBeNull();
  });
});
