import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparteditComponent } from './departedit.component';

describe('DeparteditComponent', () => {
  let component: DeparteditComponent;
  let fixture: ComponentFixture<DeparteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeparteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
