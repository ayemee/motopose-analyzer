import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPreview } from './photo-preview';

describe('PhotoPreview', () => {
  let component: PhotoPreview;
  let fixture: ComponentFixture<PhotoPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoPreview],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate image url when file is available', () => {
    const file = new File(['image'], 'photo.png', { type: 'image/png' });

    spyOn(URL, 'createObjectURL').and.returnValue('mock-preview-url');

    const previewURL = component.createObjectURL(file);

    expect(previewURL).toBe('mock-preview-url');
  });

  it('should generate default placeholder when no file is found', () => {
    const file = null;

    const previewURL = component.createObjectURL(file);

    expect(previewURL).toBe('images/hondo-rr.png');
  });
});
