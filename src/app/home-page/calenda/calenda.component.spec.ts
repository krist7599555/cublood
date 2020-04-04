import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendaComponent } from './calenda.component';

describe('CalendaComponent', () => {
  let component: CalendaComponent;
  let fixture: ComponentFixture<CalendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
