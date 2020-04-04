import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementPageComponent } from './announcement-page.component';

describe('AnnouncementPageComponent', () => {
  let component: AnnouncementPageComponent;
  let fixture: ComponentFixture<AnnouncementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
