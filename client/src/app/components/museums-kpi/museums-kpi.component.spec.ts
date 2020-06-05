import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumsKpiComponent } from './museums-kpi.component';

describe('MuseumsKpiComponent', () => {
  let component: MuseumsKpiComponent;
  let fixture: ComponentFixture<MuseumsKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumsKpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumsKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
