import { TestBed } from '@angular/core/testing';

import { RoomsService } from './rooms-service.service';

describe('RoomsServiceService', () => {
  let service: RoomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
