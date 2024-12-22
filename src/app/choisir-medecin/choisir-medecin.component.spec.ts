import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoisirMedecinComponent } from './choisir-medecin.component';

describe('ChoisirMedecinComponent', () => {
  let component: ChoisirMedecinComponent;
  let fixture: ComponentFixture<ChoisirMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoisirMedecinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoisirMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
