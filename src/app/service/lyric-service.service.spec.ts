import { TestBed } from '@angular/core/testing';

import { LyricServiceService } from './lyric-service.service';

describe('LyricServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LyricServiceService = TestBed.get(LyricServiceService);
    expect(service).toBeTruthy();
  });
});
