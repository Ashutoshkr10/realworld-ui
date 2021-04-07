import { RealworldUiPage } from './app.po';

describe('realworld-ui App', () => {
  let page: RealworldUiPage;

  beforeEach(() => {
    page = new RealworldUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
