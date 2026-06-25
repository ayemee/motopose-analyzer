import { TestBed } from '@angular/core/testing';

import { PhotoApi } from './photo-api';

describe('PhotoApi', () => {
  let service: PhotoApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
