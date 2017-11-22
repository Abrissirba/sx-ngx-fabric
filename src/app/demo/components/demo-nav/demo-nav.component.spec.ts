import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNavComponent } from './demo-nav.component';

describe('DemoNavComponent', () => {
  let component: DemoNavComponent;
  let fixture: ComponentFixture<DemoNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
