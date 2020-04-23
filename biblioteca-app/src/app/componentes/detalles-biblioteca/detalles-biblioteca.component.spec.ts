import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesBibliotecaComponent } from './detalles-biblioteca.component';

describe('DetallesBibliotecaComponent', () => {
  let component: DetallesBibliotecaComponent;
  let fixture: ComponentFixture<DetallesBibliotecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesBibliotecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
