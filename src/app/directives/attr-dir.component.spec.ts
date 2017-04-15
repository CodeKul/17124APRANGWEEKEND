import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrDirComponent } from './attr-dir.component';

describe('AttrDirComponent', () => {
  let component: AttrDirComponent;
  let fixture: ComponentFixture<AttrDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
