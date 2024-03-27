class ResourcesPage{
    get getFirstBlogButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[href="/resources/telnyx-releases-new-inference-product-to-public-beta"][data-is-interactive="true"]');
    }

    get getEmailInput() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="Email"]');
    }

    get getSubmitButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[type="submit"]');
    }

    get getSuccesMessage() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[class="c-iaFiUj"] p');
    }

    public clickFirstBlogButton() : void{
        this.getFirstBlogButton.click();
    }

    public fillEmailInput(email : string) : void{
        this.getEmailInput.get(email);
    }

    public clickSubmitButton() : void{
        this.getSubmitButton.click();
    }
}

export default new ResourcesPage();