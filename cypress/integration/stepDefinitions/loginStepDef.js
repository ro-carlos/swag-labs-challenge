/// <reference types="Cypress" />
import LoginPage from '../../support/pageObjects/LoginPage'
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


const loginPage = new LoginPage();
let username;

Given('I open Sauce Demo Page', () => {
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

Then('login button is present', function () {
    loginPage.getLoginButton().should('be.visible');
});
