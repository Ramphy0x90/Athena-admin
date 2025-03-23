import { TestBed } from '@angular/core/testing';

import { AthenaAuthService } from './athena-auth.service';

describe('AthenaAuthService', () => {
  let service: AthenaAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AthenaAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
