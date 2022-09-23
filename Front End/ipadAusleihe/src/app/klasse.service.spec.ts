import { TestBed } from '@angular/core/testing';

import { KlasseService } from './klasse.service';

describe('KlasseService', () => {
  let service: KlasseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KlasseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
