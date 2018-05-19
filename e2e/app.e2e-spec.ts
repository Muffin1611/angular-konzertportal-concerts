import { AngularKonzertportalConcertsPage } from './app.po';

describe('angular-konzertportal-concerts App', () => {
  let page: AngularKonzertportalConcertsPage;

  beforeEach(() => {
    page = new AngularKonzertportalConcertsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
