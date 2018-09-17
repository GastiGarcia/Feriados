import { ScreenOneModule } from './screen-one.module';

describe('ScreenOneModule', () => {
  let screenOneModule: ScreenOneModule;

  beforeEach(() => {
    screenOneModule = new ScreenOneModule();
  });

  it('should create an instance', () => {
    expect(screenOneModule).toBeTruthy();
  });
});
