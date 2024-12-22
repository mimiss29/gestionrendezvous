import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepatientsComponent } from './listepatients.component';

describe('ListepatientsComponent', () => {
  let component: ListepatientsComponent;
  let fixture: ComponentFixture<ListepatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListepatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListepatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
