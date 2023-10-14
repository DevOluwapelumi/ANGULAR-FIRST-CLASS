import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addTodoComponent } from './addtodo.component';

describe('addTodoComponent', () => {
  let component: addTodoComponent;
  let fixture: ComponentFixture<addTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [addTodoComponent]
    });
    fixture = TestBed.createComponent(addTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
