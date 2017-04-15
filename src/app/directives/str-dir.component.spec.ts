import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrDirComponent } from './str-dir.component';

describe('StrDirComponent', () => {
  let component: StrDirComponent;
  let fixture: ComponentFixture<StrDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
