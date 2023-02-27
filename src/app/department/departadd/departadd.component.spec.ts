import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartaddComponent } from './departadd.component';

describe('DepartaddComponent', () => {
  let component: DepartaddComponent;
  let fixture: ComponentFixture<DepartaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
