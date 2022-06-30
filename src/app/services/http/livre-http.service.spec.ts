import { TestBed } from '@angular/core/testing';

import { LivreHttpService } from './livre-http.service';

describe('LivreHttpService', () => {
  let service: LivreHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivreHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
