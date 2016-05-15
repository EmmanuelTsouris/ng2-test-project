export class Ng2TestProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-test-project-app h1')).getText();
  }
}
