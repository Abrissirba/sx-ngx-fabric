import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTextFieldComponent } from './demo-text-field.component';

describe('DemoTextFieldComponent', () => {
  let component: DemoTextFieldComponent;
  let fixture: ComponentFixture<DemoTextFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTextFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
