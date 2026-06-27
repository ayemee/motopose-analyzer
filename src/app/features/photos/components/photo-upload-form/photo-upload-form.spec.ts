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

  it('should keep placeholder when no file is selected', () => {
    const initialUrl = component.previewUrl;
    const event = {
      target: {
        files: [],
      },
    } as unknown as Event;

    component.onFileSelected(event);

    expect(component.previewUrl).toBe(initialUrl);
  });

  it('should ignore non-image files', () => {
    const file = new File(['test'], 'test.txt', { type: 'text/plain' });

    const event = {
      target: {
        files: [file],
      },
    } as unknown as Event;

    component.onFileSelected(event);

    expect(component.previewUrl).toBe('images/lean-hondo-placeholder.png');
  });

  it('should update preview url when image is selected', () => {
    const file = new File(['image'], 'photo.png', { type: 'image/png' });

    spyOn(URL, 'createObjectURL').and.returnValue('mock-preview-url');

    const event = {
      target: {
        files: [file],
      },
    } as unknown as Event;

    component.onFileSelected(event);

    expect(URL.createObjectURL).toHaveBeenCalledWith(file);
    expect(component.previewUrl).toBe('mock-preview-url');
  });
});
