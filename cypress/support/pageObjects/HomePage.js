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
}

export default HomePage;
