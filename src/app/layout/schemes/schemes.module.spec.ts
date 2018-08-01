import { SchemesModule } from './schemes.module';

describe('SchemesModule', () => {
  let schemesModule: SchemesModule;

  beforeEach(() => {
    schemesModule = new SchemesModule();
  });

  it('should create an instance', () => {
    expect(schemesModule).toBeTruthy();
  });
});
