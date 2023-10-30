import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssdetailsComponent } from './assdetails.component';

describe('AssdetailsComponent', () => {
  let component: AssdetailsComponent;
  let fixture: ComponentFixture<AssdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssdetailsComponent]
    });
    fixture = TestBed.createComponent(AssdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
