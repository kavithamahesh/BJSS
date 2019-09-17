class TestPage {
        constructor(){
            this.alertTextBeforeClick = '';
        }

    open() {
        browser.url('/');
    }

    get linkElements() {
        return '//a[contains(text(),"{0}")]';
    }
    get pageTitle(){
        return $('.example h3');
    }

    get pageSubTitle(){
        return $('.example h4');
    }

    get alertButton() {
        return $('.button.alert');
    }
    get startButton(){
        return $('div #start button');
    }

    get loadingBar(){
        return $('div #loading')
    }

    get renderedText(){
        return $('div #finish h4')
    }

    clickLink(linkText){
        console.log(this.linkElements.replace('{0'+'}',linkText));
      $(this.linkElements.replace('{0'+'}',linkText)).click();
    }
   
    clickAlertButton(){
        if (this.alertButton.isExisting()){
            this.alertTextBeforeClick=  this.alertButton.getText()
            this.alertButton.click()
            }
    }

    clickStartButton()
    {
        if (this.startButton.isExisting()){
             this.startButton.click()
            }
        }
}

export const testPage = new TestPage();
