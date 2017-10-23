import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPupilsComponent } from './my-pupils.component';

describe('MyPupilsComponent', () => {
  let component: MyPupilsComponent;
  let fixture: ComponentFixture<MyPupilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPupilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPupilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
