/* eslint-disable no-undef */

Feature('Error Page');

Scenario('Not found page', async (I) => {
  I.amOnPage('/#/404');
  I.seeElement('error-page');
  I.see('Not Found');
  const backToHomeLink = 'error-page a';
  I.seeElement(backToHomeLink);
  const urlHomeInLink = await I.grabAttributeFrom(backToHomeLink, 'href');
  I.click(backToHomeLink);
  I.seeInCurrentUrl(urlHomeInLink);
});
