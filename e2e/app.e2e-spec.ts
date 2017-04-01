import { ANGWEEKEND1APR1724Page } from './app.po';

describe('angweekend1-apr1724 App', () => {
  let page: ANGWEEKEND1APR1724Page;

  beforeEach(() => {
    page = new ANGWEEKEND1APR1724Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
