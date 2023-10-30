class ShoppingCartPage {
    getItem(itemDescription){
        return cy.get('.cart_item').contains(itemDescription);
    }

    getRemoveItemFromCartButton(itemDescription){
        return this.getItem(itemDescription).closest('.cart_item').find('button').contains('Remove');
    }
}

export default ShoppingCartPage;
