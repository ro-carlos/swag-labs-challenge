/// <reference types="Cypress" />
import CheckoutOverviewPage from '../../support/pageObjects/CheckoutOverviewPage'
import { Then } from "@badeball/cypress-cucumber-preprocessor";

const checkoutOverviewPage = new CheckoutOverviewPage();

Then('finish checkout', function () {
    checkoutOverviewPage.getFinishButton().click();
});
