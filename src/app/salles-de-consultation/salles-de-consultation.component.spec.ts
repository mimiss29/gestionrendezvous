import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallesDeConsultationComponent } from './salles-de-consultation.component';

describe('SallesDeConsultationComponent', () => {
  let component: SallesDeConsultationComponent;
  let fixture: ComponentFixture<SallesDeConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SallesDeConsultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SallesDeConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
