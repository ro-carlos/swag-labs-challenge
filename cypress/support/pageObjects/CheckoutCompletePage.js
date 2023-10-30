class CheckoutCompletePage {
    getCompleteHeader(){
        return cy.get('.complete-header');
    }

    getCompleteText(){
        return cy.get('.complete-text');
    }

    getBackHomeButton(){
        return cy.get('[data-test="back-to-products"]');
    }
}

export default CheckoutCompletePage;
