Feature: Add Item to Cart SauceDemo Functionality

    @Smoke
    Scenario: Adding item to cart with standard_user
    Given I open Sauce Demo Page
    When I add login data
    |user | password |
    |standard_user | secret_sauce   |
    Then navigate to home page
    And app logo is present
    And item 'Sauce Labs Backpack' is present
    And add item 'Sauce Labs Backpack' to cart
    And shopping cart '1' item is present
    And navigate to shopping cart page
    And item 'Sauce Labs Backpack' is present in shopping cart

    @Smoke
    Scenario: Adding item to cart with problem_user
    Given I open Sauce Demo Page
    When I add login data
    |user | password |
    |problem_user | secret_sauce   |
    Then navigate to home page
    And app logo is present
    And item 'Sauce Labs Bike Light' is present
    And add item 'Sauce Labs Bike Light' to cart
    And shopping cart '1' item is present
    And navigate to shopping cart page
    And item 'Sauce Labs Bike Light' is present in shopping cart

