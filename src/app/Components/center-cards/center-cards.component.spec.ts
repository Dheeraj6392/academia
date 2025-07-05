import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterCardsComponent } from './center-cards.component';

describe('CenterCardsComponent', () => {
  let component: CenterCardsComponent;
  let fixture: ComponentFixture<CenterCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CenterCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
