// import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Angular Template App', () => {
  // let page: AppPage;

  const EMAIL = "";

  // Allow testing non-Angular page
  browser.ignoreSynchronization = true;

  beforeEach(() => {
    // page = new AppPage();
    browser.get('');
  });

  it('Test redirect', function() {

    // This spec is only for new Azure AD login experience

    browser.sleep(500);

    browser.findElement(by.id("i0116")).sendKeys(EMAIL)

    browser.sleep(500);

    browser.findElement(by.id("idSIButton9")).click();

    browser.sleep(10000);

    // Check page title
    expect(browser.getTitle()).toEqual('Angular Go');
    // Check link click
    // element(by.linkText('TBD')).click();
    var sampleLink = element(by.cssContainingText("span.ng-tns-c3-1", ""));
    sampleLink.click();
    browser.sleep(500);
    var productFormLink = element(by.cssContainingText("span.ng-tns-c3-6", ""));
    productFormLink.click();
    browser.sleep(1000);
    // Check URL
    expect(browser.getCurrentUrl()).toEqual('https://127.0.0.1:8009/sample/product_form');
    });

});
