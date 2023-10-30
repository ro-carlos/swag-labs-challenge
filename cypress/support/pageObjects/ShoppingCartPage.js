class ShoppingCartPage {
    getItem(itemDescription){
        return cy.get('.cart_item').contains(itemDescription);
    }
}

export default ShoppingCartPage;
