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

  it('should update previewURL when a valid file is provided', () => {
    const file = new File([''], 'test.jpg', { type: 'image/jpeg' });
    component.file = file;
    component.ngOnChanges();
    expect(component.previewURL).toContain('blob:');
  });

  it('should not update previewURL when file is null', () => {
    component.file = null;
    component.ngOnChanges();
    expect(component.previewURL).toBe('images/hondo-rr.png');
  });
});
