import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttendanceGridComponent } from './add-attendance-grid.component';

describe('AddAttendanceGridComponent', () => {
  let component: AddAttendanceGridComponent;
  let fixture: ComponentFixture<AddAttendanceGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAttendanceGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAttendanceGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
