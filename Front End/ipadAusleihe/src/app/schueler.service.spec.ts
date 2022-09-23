import { TestBed } from '@angular/core/testing';

import { SchuelerService } from './schueler.service';

describe('SchuelerService', () => {
  let service: SchuelerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchuelerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
