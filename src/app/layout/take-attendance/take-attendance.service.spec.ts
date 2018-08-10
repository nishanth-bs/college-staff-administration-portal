import { TestBed, inject } from '@angular/core/testing';

import { TakeAttendanceService } from './take-attendance.service';

describe('TakeAttendanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TakeAttendanceService]
    });
  });

  it('should be created', inject([TakeAttendanceService], (service: TakeAttendanceService) => {
    expect(service).toBeTruthy();
  }));
});
