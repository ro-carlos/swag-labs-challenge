/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import { Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = new HomePage();

Then('app logo is present', function () {
    homePage.getAppLogo().should('be.visible');
});


Then('products are present', function () {
    homePage.getItems().should('be.visible');
});

Then('shopping cart is present', function () {
    homePage.getShoppingCart().should('be.visible');
});

Then('open burger menu', function () {
    homePage.getBurgerMenuButton().click();
});

Then('logout user', function () {
    homePage.getLogoutButton().click();
});

Then('item {string} is present', function (itemDescription) {
    homePage.getItem(itemDescription).should('be.visible');
});

Then('add item {string} to cart', function (itemDescription) {
    homePage.getItemCartButton(itemDescription).click();
});

Then('shopping cart {string} item is present', function (numberOfItems) {
    homePage.getShopingCartLink().should(($el) =>{
        expect($el).to.contain(numberOfItems);
    });
});

Then('navigate to shopping cart page', function () {
    homePage.getShopingCartLink().click();
});