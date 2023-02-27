import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaddComponent } from './dadd.component';

describe('DaddComponent', () => {
  let component: DaddComponent;
  let fixture: ComponentFixture<DaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
