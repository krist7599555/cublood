import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodtypeComponent } from './bloodtype.component';

describe('BloodtypeComponent', () => {
  let component: BloodtypeComponent;
  let fixture: ComponentFixture<BloodtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodtypeComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
