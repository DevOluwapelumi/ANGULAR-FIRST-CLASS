import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventreceiveComponent } from './eventreceive.component';

describe('EventreceiveComponent', () => {
  let component: EventreceiveComponent;
  let fixture: ComponentFixture<EventreceiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventreceiveComponent]
    });
    fixture = TestBed.createComponent(EventreceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
