import { Ng2TestProjectPage } from './app.po';

describe('ng2-test-project App', function() {
  let page: Ng2TestProjectPage;

  beforeEach(() => {
    page = new Ng2TestProjectPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-test-project works!');
  });
});
