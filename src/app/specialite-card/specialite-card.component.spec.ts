import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialiteCardComponent } from './specialite-card.component';

describe('SpecialiteCardComponent', () => {
  let component: SpecialiteCardComponent;
  let fixture: ComponentFixture<SpecialiteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialiteCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialiteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
