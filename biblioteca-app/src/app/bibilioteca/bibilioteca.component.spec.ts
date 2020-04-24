import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibiliotecaComponent } from './bibilioteca.component';

describe('BibiliotecaComponent', () => {
  let component: BibiliotecaComponent;
  let fixture: ComponentFixture<BibiliotecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibiliotecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibiliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
