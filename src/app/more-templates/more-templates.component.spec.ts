import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreTemplatesComponent } from './more-templates.component';

describe('MoreTemplatesComponent', () => {
  let component: MoreTemplatesComponent;
  let fixture: ComponentFixture<MoreTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
