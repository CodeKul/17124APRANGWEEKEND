import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterCompCommComponent } from './inter-comp-comm.component';

describe('InterCompCommComponent', () => {
  let component: InterCompCommComponent;
  let fixture: ComponentFixture<InterCompCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterCompCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterCompCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
