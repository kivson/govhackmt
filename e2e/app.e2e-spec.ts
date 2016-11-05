import { GovhackPage } from './app.po';

describe('govhack App', function() {
  let page: GovhackPage;

  beforeEach(() => {
    page = new GovhackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
