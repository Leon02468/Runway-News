import { TestBed } from '@angular/core/testing';

import { RunwayService } from './runway.service';

describe('RunwayService', () => {
  let service: RunwayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunwayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
