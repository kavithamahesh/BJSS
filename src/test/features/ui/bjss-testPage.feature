@UI
Feature: Challenging DOM
Test1 :Navigate to https://the-internet.herokuapp.com/
    Click Challenging DOM
    Confirm that the red button label changes after it's clicked

Test 2: Navigate to https://the-internet.herokuapp.com/
    Click Dynamically Loaded Page Elements
    Click Example 2: Element rendered after the fact
    Confirm 'Hello World!' is rendered after the loading bar disappears


Scenario: To Validate red button label change

    Given user navigate to test page
    When user click on 'Challenging DOM' link text
    Then user validate the page title has 'Challenging DOM' text
    When user click on red button
    Then user validate the label of red button has changed


Scenario: To Validate dynamic loading content
    Given user navigate to test page
    When user click on 'Dynamic Loading' link text
    Then user validate the page title has 'Dynamically Loaded Page Elements' text
    When user click on 'Example 2: Element rendered after the fact' link text
    Then user validate the page subtitle has 'Example 2: Element rendered after the fact' text
    When user click on start button
    Then user validate 'Hello World!' text is displayed after loading bar disappears
   
