import { TestBed } from '@angular/core/testing';

import { TypeHttpService } from './type-http.service';

describe('TypeHttpService', () => {
  let service: TypeHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
