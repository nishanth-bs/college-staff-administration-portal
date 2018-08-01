import { TeachersModule } from './teachers.module';

describe('TeachersModule', () => {
  let teachersModule: TeachersModule;

  beforeEach(() => {
    teachersModule = new TeachersModule();
  });

  it('should create an instance', () => {
    expect(teachersModule).toBeTruthy();
  });
});
