/// <reference types="Cypress" />
import CheckoutInformationPage from '../../support/pageObjects/CheckoutInformationPage'
import { Then } from "@badeball/cypress-cucumber-preprocessor";

const checkoutInformationPage = new CheckoutInformationPage();

Then('add firstname {string}', function (firstname) {
    checkoutInformationPage.getFirstname().type(firstname);
});

Then('add lastname {string}', function (lastname) {
    checkoutInformationPage.getLastname().type(lastname);
});
Then('add postalcode {string}', function (postalcode) {
    checkoutInformationPage.getPostalCode().type(postalcode);
});

Then('continue to checkout overview', function () {
    checkoutInformationPage.getContinueButton().click();
});
