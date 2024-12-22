import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMedecinsSpecialiteComponent } from './listemedecinspecialite.component';

describe('ListemedecinspecialiteComponent', () => {
  let component: ListeMedecinsSpecialiteComponent;
  let fixture: ComponentFixture<ListeMedecinsSpecialiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMedecinsSpecialiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeMedecinsSpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
