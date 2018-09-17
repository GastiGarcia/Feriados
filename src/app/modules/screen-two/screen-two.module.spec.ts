import { ScreenTwoModule } from './screen-two.module';

describe('ScreenTwoModule', () => {
  let screenTwoModule: ScreenTwoModule;

  beforeEach(() => {
    screenTwoModule = new ScreenTwoModule();
  });

  it('should create an instance', () => {
    expect(screenTwoModule).toBeTruthy();
  });
});
