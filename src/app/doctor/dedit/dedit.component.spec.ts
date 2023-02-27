import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeditComponent } from './dedit.component';

describe('DeditComponent', () => {
  let component: DeditComponent;
  let fixture: ComponentFixture<DeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
