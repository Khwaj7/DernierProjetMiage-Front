import { TestBed } from '@angular/core/testing';

import { RandoServiceService } from './rando-service.service';

describe('RandoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandoServiceService = TestBed.get(RandoServiceService);
    expect(service).toBeTruthy();
  });
});
