Feature: Checkout Item in Cart SauceDemo Functionality

    @Smoke
    Scenario: checkout item in cart with standard_user
    Given I open Sauce Demo Page
    When I add login data
    |user | password |
    |standard_user | secret_sauce   |
    Then navigate to home page
    And app logo is present
    And add item 'Sauce Labs Backpack' to cart
    And navigate to shopping cart page
    And checkout item
    And add firstname 'FirstName'
    And add lastname 'Lastname'
    And add postalcode '123456'
    And continue to checkout overview
    And finish checkout
    And complete header 'Thank you for your order' is present in checkout
    And complete text 'Your order has been dispatched' is present in checkout
    And backhome button is present in checkout


    @Smoke
    Scenario: checkout item in cart with problem_user
    Given I open Sauce Demo Page
    When I add login data
    |user | password |
    |problem_user | secret_sauce   |
    Then navigate to home page
    And app logo is present
    And add item 'Sauce Labs Bike Light' to cart
    And navigate to shopping cart page
    And checkout item
    And add firstname 'FirstName'
    And add lastname 'Lastname'
    And add postalcode '123456'
    And continue to checkout overview
    And finish checkout
    And complete header 'Thank you for your order' is present in checkout
    And complete text 'Your order has been dispatched' is present in checkout
    And backhome button is present in checkout
