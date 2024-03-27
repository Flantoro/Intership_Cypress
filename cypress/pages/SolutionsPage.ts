class SolutionsPage{
    get getSeeIndustriesButton() : Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('[title="See industries"]');
    }

    get getHealthcareImage() : Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('[href="/solutions/healthcare"]').first();
    }

    get getResourcesText() : Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('section strong').last();
    }

    public clickSeeIndustriesButton() : void{
        this.getSeeIndustriesButton.click();
    }

    public clickHealthcareImage() : void{
        this.getHealthcareImage.click();
    }

    public scrollToResourcesText() : void{
        this.getResourcesText.scrollIntoView();
    }
}

export default new SolutionsPage();