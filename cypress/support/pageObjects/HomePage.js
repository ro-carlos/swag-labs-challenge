class HomePage {
    getAppLogo(){
        return cy.get('.app_logo');
    }

    getItems(){
        return cy.get('.inventory_list');
    }

    getShoppingCart(){
        return cy.get('.shopping_cart_link');
    }

    getBurgerMenuButton(){
        return cy.get('#react-burger-menu-btn');
    }

    getLogoutButton(){
        return cy.get('#logout_sidebar_link');
    }

    getItem(itemDescription){
        return cy.get('.inventory_item_description').contains(itemDescription);
    }

    getItemCartButton(itemDescription){
        return this.getItem(itemDescription).closest('.inventory_item_description').find('.pricebar > button');
    }

    getShopingCartLink(){
        return cy.get('.shopping_cart_link');
    }
}

export default HomePage;
