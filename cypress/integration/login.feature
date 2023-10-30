Feature: End to end SauceDemo validation

    @Smoke
    Scenario: Logging into the application with standard_user
    Given I open Sauce Demo Page
    When I add login data
    |user | password |
    |standard_user | secret_sauce   |
    Then validate the form values
    And navigate to home page
    And app logo is present
    And products are present
    And shopping cart is present

    @Smoke
    Scenario: Logging into the application with problem_user
    Given I open Sauce Demo Page
    When I add login data
    |user | password |
    |problem_user | secret_sauce   |
    Then validate the form values
    And navigate to home page
    And app logo is present
    And products are present
    And shopping cart is present