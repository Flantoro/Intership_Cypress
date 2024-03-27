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
        return cy.get('//form[@aria-label="signup-form"]//button[@type="submit"]');
    }

    get getEmailValidationMessage() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="email_message"]');
    }

    public fillEmailInput(email : string) : void{
        this.getEmailInput.get(email);
    }

    public fillFirstNameInput(firstName : string) : void{
        this.getFirstNameInput.get(firstName);
    }

    public fillLastNameInput(lastName : string) : void{
        this.getLastNameInput.get(lastName);
    }

    public fillPasswordInput(password : string) : void{
        this.getPasswordInput.get(password);
    }

    public checkTermsAndConditionsCheckbox() : void{
        this.getTermsAndConditionsCheckbox.check();
    }

    public clickSignUpButton() : void{
        this.getSignUpButton.click();
    }

}

export default new SignUpPage();