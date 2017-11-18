import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNavigationComponent } from './demo-navigation.component';

describe('DemoNavigationComponent', () => {
  let component: DemoNavigationComponent;
  let fixture: ComponentFixture<DemoNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
