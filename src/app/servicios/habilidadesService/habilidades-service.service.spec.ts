import { TestBed } from '@angular/core/testing';

import { HabilidadesServiceService } from './habilidades-service.service';

describe('HabilidadesServiceService', () => {
  let service: HabilidadesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabilidadesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
