import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngmaterialComponent } from './angmaterial.component';

describe('AngmaterialComponent', () => {
  let component: AngmaterialComponent;
  let fixture: ComponentFixture<AngmaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngmaterialComponent]
    });
    fixture = TestBed.createComponent(AngmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
