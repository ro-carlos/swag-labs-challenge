/// <reference types="Cypress" />
import LoginPage from '../../support/pageObjects/LoginPage'
import HomePage from '../../support/pageObjects/HomePage'
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


const loginPage = new LoginPage();
const homePage = new HomePage();
let username;

Given('I open Sauce Demo Page', () => {
    //cy.wait(10000);
    cy.visit(Cypress.env('url') + "/");

});

When('I add login data', function (dataTable) {
    username = dataTable.rawTable[1][0];
    loginPage.getUsername().type(username);
    loginPage.getPassword().type(dataTable.rawTable[1][1]);
});

Then('validate the form values', function () {
    loginPage.getUsername().should('have.value', username);
    loginPage.getLoginButton().should('be.enabled');
});

Then('navigate to home page', () => {
    loginPage.getLoginButton().click();
});

Then('app logo is present', function () {
    homePage.getAppLogo().should('be.visible');
});


Then('products are present', function () {
    homePage.getItems().should('be.visible');
});

Then('shopping cart is present', function () {
    homePage.getShoppingCart().should('be.visible');
});