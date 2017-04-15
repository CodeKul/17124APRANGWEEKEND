import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjModOneComponent } from './proj-mod-one.component';

describe('ProjModOneComponent', () => {
  let component: ProjModOneComponent;
  let fixture: ComponentFixture<ProjModOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjModOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjModOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
