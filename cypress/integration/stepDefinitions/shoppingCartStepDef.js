/// <reference types="Cypress" />
import ShoppingCartPage from '../../support/pageObjects/ShoppingCartPage'
import { Then } from "@badeball/cypress-cucumber-preprocessor";

const shoppingCartPage = new ShoppingCartPage();

Then('item {string} is present in shopping cart', function (itemDescription) {
    shoppingCartPage.getItem(itemDescription).should('be.visible');
});

Then('remove item {string} from cart', function (itemDescription) {
    shoppingCartPage.getRemoveItemFromCartButton(itemDescription).click();
});
