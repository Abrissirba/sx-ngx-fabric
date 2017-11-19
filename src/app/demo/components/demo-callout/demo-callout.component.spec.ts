import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCalloutComponent } from './demo-callout.component';

describe('DemoCalloutComponent', () => {
  let component: DemoCalloutComponent;
  let fixture: ComponentFixture<DemoCalloutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCalloutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCalloutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
