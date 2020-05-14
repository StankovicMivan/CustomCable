import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycicComponent } from './cycic.component';

describe('CycicComponent', () => {
  let component: CycicComponent;
  let fixture: ComponentFixture<CycicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
