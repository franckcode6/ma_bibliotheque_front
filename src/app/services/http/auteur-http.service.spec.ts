import { TestBed } from '@angular/core/testing';

import { AuteurHttpService } from './auteur-http.service';

describe('AuteurHttpService', () => {
  let service: AuteurHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuteurHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
