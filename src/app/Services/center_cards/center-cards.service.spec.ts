import { TestBed } from '@angular/core/testing';

import { CenterCardsService } from './center-cards.service';

describe('CenterCardsService', () => {
  let service: CenterCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CenterCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
