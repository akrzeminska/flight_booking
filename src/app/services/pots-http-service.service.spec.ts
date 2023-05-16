import { TestBed } from '@angular/core/testing';

import { PotsHttpServiceService } from './pots-http-service.service';

describe('PotsHttpServiceService', () => {
  let service: PotsHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotsHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
