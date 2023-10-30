/// <reference types="Cypress" />
import LoginPage from '../../support/pageObjects/LoginPage'
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


const loginPage = new LoginPage();

Given('I open Sauce Demo Page', () => {
    cy.visit(Cypress.env('url') + "/");
});

When('I add login data', function (dataTable) {
    loginPage.getUsername().type(dataTable.rawTable[1][0]);
    loginPage.getPassword().type(dataTable.rawTable[1][1]);
});

Then('user {string} is present', function (expectedUsername) {
    loginPage.getUsername().should('have.value', expectedUsername);
    loginPage.getLoginButton().should('be.enabled');
});

Then('login button is enabled', function () {
    loginPage.getLoginButton().should('be.enabled');
});

Then('navigate to home page', () => {
    loginPage.getLoginButton().click();
});

Then('login button is present', function () {
    loginPage.getLoginButton().should('be.visible');
});
