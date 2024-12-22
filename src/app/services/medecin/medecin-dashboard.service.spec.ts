import { TestBed } from '@angular/core/testing';

import { MedecinDashboardService } from './medecin-dashboard.service';

describe('MedecinDashboardService', () => {
  let service: MedecinDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedecinDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
