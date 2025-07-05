import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPapersComponent } from './upload-papers.component';

describe('UploadPapersComponent', () => {
  let component: UploadPapersComponent;
  let fixture: ComponentFixture<UploadPapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadPapersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
