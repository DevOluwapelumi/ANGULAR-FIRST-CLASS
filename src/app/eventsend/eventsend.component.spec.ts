import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsendComponent } from './eventsend.component';

describe('EventsendComponent', () => {
  let component: EventsendComponent;
  let fixture: ComponentFixture<EventsendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsendComponent]
    });
    fixture = TestBed.createComponent(EventsendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
