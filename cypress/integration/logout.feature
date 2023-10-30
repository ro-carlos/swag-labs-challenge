Feature: Login SauceDemo Functionality

    @Smoke
    Scenario: Logging out the application with standard_user
    Given I open Sauce Demo Page
    When I add login data
    |user | password |
    |standard_user | secret_sauce   |
    Then navigate to home page
    And app logo is present
    And open burger menu
    And logout user
    And login button is present

    @Smoke
    Scenario: Logging out the application with problem_user
    Given I open Sauce Demo Page
    When I add login data
    |user | password |
    |problem_user | secret_sauce   |
    Then navigate to home page
    And app logo is present
    And open burger menu
    And logout user
    And login button is present

