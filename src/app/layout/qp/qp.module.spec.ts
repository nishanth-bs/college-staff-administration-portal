import { QpModule } from './qp.module';

describe('QpModule', () => {
  let qpModule: QpModule;

  beforeEach(() => {
    qpModule = new QpModule();
  });

  it('should create an instance', () => {
    expect(qpModule).toBeTruthy();
  });
});
