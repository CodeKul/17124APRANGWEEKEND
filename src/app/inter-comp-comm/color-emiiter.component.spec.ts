import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorEmiiterComponent } from './color-emiiter.component';

describe('ColorEmiiterComponent', () => {
  let component: ColorEmiiterComponent;
  let fixture: ComponentFixture<ColorEmiiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorEmiiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorEmiiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
