import { TestBed } from '@angular/core/testing';

import { FlightGeneratorService } from './flight-generator.service';

describe('FlightGeneratorService', () => {
  let service: FlightGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
