import { TestBed } from '@angular/core/testing';

import { ApiclientService } from './apiclient.service';

describe('ApiclientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiclientService = TestBed.get(ApiclientService);
    expect(service).toBeTruthy();
  });
});
