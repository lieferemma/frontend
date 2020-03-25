import { TestBed } from '@angular/core/testing';

import { ErrorAlertService } from './error-alert.service';

describe('ErrorAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorAlertService = TestBed.get(ErrorAlertService);
    expect(service).toBeTruthy();
  });
});
