import { TestBed } from '@angular/core/testing';

import { PagesService } from './pages.service';

describe('PagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagesService = TestBed.get(PagesService);
    expect(service).toBeTruthy();
  });
});
