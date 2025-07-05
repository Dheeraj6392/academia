import { TestBed } from '@angular/core/testing';

import { PaperDashboardService } from './paper-dashboard.service';

describe('PaperDashboardService', () => {
  let service: PaperDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaperDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
