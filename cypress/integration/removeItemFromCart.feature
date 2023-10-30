Feature: Remove Item from Cart SauceDemo Functionality

    @Smoke
    Scenario: Removing item from cart with standard_user
    Given I open Sauce Demo Page
    When I add login data
    |user | password |
    |standard_user | secret_sauce   |
    Then navigate to home page
    And app logo is present
    And add item 'Sauce Labs Backpack' to cart
    And navigate to shopping cart page
    And remove item 'Sauce Labs Backpack' from cart
    And shopping cart '' item is present

    @Smoke
    Scenario: Removing item from cart with problem_user
    Given I open Sauce Demo Page
    When I add login data
    |user | password |
    |problem_user | secret_sauce   |
    Then navigate to home page
    And app logo is present
    And add item 'Sauce Labs Bike Light' to cart
    And navigate to shopping cart page
    And remove item 'Sauce Labs Bike Light' from cart
    And shopping cart '' item is present

