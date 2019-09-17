import { assert } from 'chai';

import { Given, When, Then } from 'cucumber';
import { testPage } from '../pages/testPage.page';

Given(/^user navigate to test page$/, () => {
    testPage.open();
});

When(/^user click on '(.+)' link text$/, (linkText) => {
    testPage.clickLink(linkText);
});

When(/^user click on red button$/, () => {
    testPage.clickAlertButton();
});

When(/^user click on start button$/, () => {
    testPage.clickStartButton();
});

Then(/^user validate the page title has '(.+)' text$/, (linkText) => {
    assert.equal(
        testPage.pageTitle.getText(),
        linkText,
    );
});

Then(/^user validate the page subtitle has '(.+)' text$/, (linkText) => {
    assert.equal(
        testPage.pageSubTitle.getText(),
        linkText,
    );
});
Then(/^user validate the label of red button has changed$/, () => {
    
    if (testPage.alertButton.isExisting()){
        assert.notEqual(testPage.alertButton.getText(),testPage.alertTextBeforeClick);
    }
})

Then(/^user validate '(.+)' text is displayed after loading bar disappears$/, (expectedText) => {
    if(testPage.loadingBar.isDisplayed()){
        browser.waitUntil( () =>{
            return !testPage.loadingBar.isDisplayed()
        })
    }
   if(testPage.renderedText.isExisting()){
    assert.equal(testPage.renderedText.getText(),expectedText);
   }
    
});
