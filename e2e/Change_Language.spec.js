/* eslint-disable no-undef */

const assert = require('assert');

const displayButton = '.language-setting > button';
const floatButton = '.language-setting .float-setting button';
const jumbotronHeading = 'full-jumbotron h2';

Feature('Change Language');

Before(async (I) => {
  I.amOnPage('/');
  const firstTimeLanguage = await I.grabAttributeFrom('//html', 'lang');
  assert.strictEqual(firstTimeLanguage, 'en');
});

Scenario('change language from button', async (I) => {
  const oldJumbotronHeading = await I.grabTextFrom(jumbotronHeading);
  I.seeElement(displayButton);
  I.click(displayButton);
  I.seeElement(floatButton);
  const buttonLanguage = locate(floatButton).last();
  const languageInButton = await I.grabAttributeFrom(buttonLanguage, 'data-language');
  I.click(buttonLanguage);
  const languageInRoot = await I.grabAttributeFrom('//html', 'lang');
  assert.strictEqual(languageInButton, languageInRoot);

  I.refreshPage();

  const languageInRootAfterRefresh = await I.grabAttributeFrom('//html', 'lang');
  assert.strictEqual(languageInRoot, languageInRootAfterRefresh);
  const newJumbotronHeading = await I.grabTextFrom(jumbotronHeading);
  assert.notStrictEqual(oldJumbotronHeading, newJumbotronHeading);
});
