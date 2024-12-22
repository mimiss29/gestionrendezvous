import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRvComponent } from './patient-rv.component';

describe('PatientRvComponent', () => {
  let component: PatientRvComponent;
  let fixture: ComponentFixture<PatientRvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientRvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
