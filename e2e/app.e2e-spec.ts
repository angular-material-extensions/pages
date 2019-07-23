import { NgxMaterialPagesDemoPage } from './app.po';

describe('@angular-material-extensions/pages-demo App', () => {
  let page: NgxMaterialPagesDemoPage;

  beforeEach(() => {
    page = new NgxMaterialPagesDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
