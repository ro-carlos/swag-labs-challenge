class CheckoutInformationPage {
    getFirstname(){
        return cy.get('[data-test="firstName"]');
    }

    getLastname(){
        return cy.get('[data-test="lastName"]');
    }

    getPostalCode(){
        return cy.get('[data-test="postalCode"]');
    }

    getContinueButton(){
        return cy.get('[data-test="continue"]');
    }
}

export default CheckoutInformationPage;
