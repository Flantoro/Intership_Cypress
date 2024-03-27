class SignUpPage{
    get getEmailInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="email"]');
    }

    get getFirstNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="first_name"]');
    }

    get getLastNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="last_name"]');
    }

    get getPasswordInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="password"]');
    }

    get getTermsAndConditionsCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="terms_and_conditions"]');
    }

    get getSignUpButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[type="submit"]').first();
    }

    get getEmailValidationMessage() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="email_message"]');
    }

    get getRecaptchaError() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[aria-describedby="error"]');
    }

    public fillEmailInput(email : string) : void{
        this.getEmailInput.type(email);
    }

    public fillFirstNameInput(firstName : string) : void{
        this.getFirstNameInput.type(firstName);
    }

    public fillLastNameInput(lastName : string) : void{
        this.getLastNameInput.type(lastName);
    }

    public fillPasswordInput(password : string) : void{
        this.getPasswordInput.type(password);
    }

    public checkTermsAndConditionsCheckbox() : void{
        this.getTermsAndConditionsCheckbox.check();
    }

    public clickSignUpButton() : void{
        this.getSignUpButton.click();
    }

}

export default new SignUpPage();