import { TakeAttendanceModule } from './take-attendance.module';

describe('TakeAttendanceModule', () => {
  let takeAttendanceModule: TakeAttendanceModule;

  beforeEach(() => {
    takeAttendanceModule = new TakeAttendanceModule();
  });

  it('should create an instance', () => {
    expect(takeAttendanceModule).toBeTruthy();
  });
});
