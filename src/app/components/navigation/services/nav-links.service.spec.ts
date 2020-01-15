import { TestBed } from '@angular/core/testing';

import { NavLinksService } from './nav-links.service';

describe('NavLinksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavLinksService = TestBed.get(NavLinksService);
    expect(service).toBeTruthy();
  });
});
