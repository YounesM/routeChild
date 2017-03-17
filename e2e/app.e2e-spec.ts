import { RouteChildPage } from './app.po';

describe('route-child App', () => {
  let page: RouteChildPage;

  beforeEach(() => {
    page = new RouteChildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
