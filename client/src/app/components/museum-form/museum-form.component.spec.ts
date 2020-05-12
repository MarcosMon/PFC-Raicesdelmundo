import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumFormComponent } from './museum-form.component';

describe('MuseumFormComponent', () => {
  let component: MuseumFormComponent;
  let fixture: ComponentFixture<MuseumFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
