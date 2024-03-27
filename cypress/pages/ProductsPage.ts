class ProductsPage{
    get getCommunicationsTab() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="communications"]').first();
    }

    get getIoTTab() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="iot"]').first();
    }

    get getNetworkingTab(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="networking"]').first();
    }

    get getComputeTab(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="compute"]').first();
    }

}

export default new ProductsPage();