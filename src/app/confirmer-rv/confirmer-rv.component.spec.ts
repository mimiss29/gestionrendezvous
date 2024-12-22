import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmerRvComponent } from './confirmer-rv.component';

describe('ConfirmerRvComponent', () => {
  let component: ConfirmerRvComponent;
  let fixture: ComponentFixture<ConfirmerRvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmerRvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmerRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
