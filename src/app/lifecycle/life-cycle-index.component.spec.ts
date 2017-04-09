import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleIndexComponent } from './life-cycle-index.component';

describe('LifeCycleIndexComponent', () => {
  let component: LifeCycleIndexComponent;
  let fixture: ComponentFixture<LifeCycleIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCycleIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
