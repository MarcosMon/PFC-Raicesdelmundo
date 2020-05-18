import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymuseumListComponent } from './mymuseum-list.component';

describe('MymuseumListComponent', () => {
  let component: MymuseumListComponent;
  let fixture: ComponentFixture<MymuseumListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymuseumListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymuseumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
