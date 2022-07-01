import { TestBed } from '@angular/core/testing';

import { EditeurHttpService } from './editeur-http.service';

describe('EditeurHttpService', () => {
  let service: EditeurHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditeurHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
