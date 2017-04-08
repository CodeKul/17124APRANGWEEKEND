import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorReceiverComponent } from './color-receiver.component';

describe('ColorReceiverComponent', () => {
  let component: ColorReceiverComponent;
  let fixture: ComponentFixture<ColorReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
