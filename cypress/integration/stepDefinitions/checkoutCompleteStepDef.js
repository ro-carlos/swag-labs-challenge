/// <reference types="Cypress" />
import CheckoutCompletePage from '../../support/pageObjects/CheckoutCompletePage'
import { Then } from "@badeball/cypress-cucumber-preprocessor";

const checkoutCompletePage = new CheckoutCompletePage();

Then('complete header {string} is present in checkout', function (text) {
    checkoutCompletePage.getCompleteHeader().should(($el) =>{
        expect($el).to.contain(text);
    });
});

Then('complete text {string} is present in checkout', function (text) {
    checkoutCompletePage.getCompleteText().should(($el) =>{
        expect($el).to.contain(text);
    });
});

Then('backhome button is present in checkout', function () {
    checkoutCompletePage.getBackHomeButton().should('be.visible');
});
