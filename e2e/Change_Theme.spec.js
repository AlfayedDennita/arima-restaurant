/* eslint-disable no-undef */

const assert = require('assert');

const displayButton = '.theme-setting > button';
const floatButton = '.theme-setting .float-setting button';

Feature('Change Theme');

Before(async (I) => {
  I.amOnPage('/');
  const firstTimeTheme = await I.grabAttributeFrom('//body', 'data-theme');
  assert.strictEqual(firstTimeTheme, 'orange');
});

Scenario('change color theme from button', async (I) => {
  I.seeElement(displayButton);
  I.click(displayButton);
  I.seeElement(floatButton);
  const buttonTheme = locate(floatButton).at(2);
  const colorInButton = await I.grabAttributeFrom(buttonTheme, 'data-color');
  I.click(buttonTheme);
  const themeInBody = await I.grabAttributeFrom('//body', 'data-theme');
  assert.strictEqual(colorInButton, themeInBody);

  I.refreshPage();

  const themeInBodyAfterRefresh = await I.grabAttributeFrom('//body', 'data-theme');
  assert.strictEqual(themeInBody, themeInBodyAfterRefresh);
});
