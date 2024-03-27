class ContactUsPage{
    get getContactUsForm() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[title="Contact us"]');
    }

    get getReasonForContact() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="Reason_for_Contact__c"]');
    }

    get getSubmitButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[type="submit"]');
    }

    get getValidationMessage() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[class="mktoErrorMsg"]');
    }

    public clickSubmitButton() : void{
        this.getSubmitButton.click();
    }
}

export default new ContactUsPage();