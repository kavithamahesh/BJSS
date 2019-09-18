@API
Feature: CRUD operation on employee endpoints

Background: To check the availability of Employee endpoint and creating new employee
    Given user send GET request to employee endpoint
     When user create new employee with below details
    |name|salary|age|
    |random|15000|23|
    Then the user validates the newly created employee does exist in resultset

Scenario Outline: Update existing employee details
    When user update employee information with <name> ,<salary>, <age>
    Then the user validates the changes to <name> ,<salary>, <age> updated correctly for the employee 
   
    Examples:
    | name      | salary    | age   |
    | random    | same      | same  |
     |same      |25000      |same   |
     |same      |same       |35     |

Scenario: Delete an employee from dataset and validate the same
    When user delete the newly created user
    Then the user validates the same user does not exist in the resultset
   

   