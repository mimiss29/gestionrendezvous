import { TestBed } from '@angular/core/testing';

import { SalleDeConsultationService } from './salle-de-consultation.service';

describe('SalleDeConsultationService', () => {
  let service: SalleDeConsultationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalleDeConsultationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
