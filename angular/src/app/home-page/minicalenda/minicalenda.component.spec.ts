import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinicalendaComponent } from './minicalenda.component';

describe('MinicalendaComponent', () => {
  let component: MinicalendaComponent;
  let fixture: ComponentFixture<MinicalendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinicalendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinicalendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
