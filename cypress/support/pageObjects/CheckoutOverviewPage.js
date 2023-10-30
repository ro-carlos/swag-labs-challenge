class CheckoutOverviewPage {
    getFinishButton(){
        return cy.get('[data-test="finish"]');
    }
}

export default CheckoutOverviewPage;
