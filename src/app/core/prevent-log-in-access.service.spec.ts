import { TestBed } from '@angular/core/testing';

import { PreventLogInAccessService } from './prevent-log-in-access.service';

describe('PreventLogInAccessService', () => {
  let service: PreventLogInAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreventLogInAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
