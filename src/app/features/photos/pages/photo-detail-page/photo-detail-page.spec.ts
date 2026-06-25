import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDetailPage } from './photo-detail-page';

describe('PhotoDetailPage', () => {
  let component: PhotoDetailPage;
  let fixture: ComponentFixture<PhotoDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoDetailPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
