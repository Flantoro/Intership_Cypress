class SignUpPage{
    get getEmailInput(){
        return cy.get('[id="email"]');
    }

    get getEmailValidationMessage(){
        return cy.get('[id="email_message"]');
    }

    get getRecaptchaError(){
        return cy.get('[aria-describedby="error"]');
    }

    fillEmailInput(email) {
        this.getEmailInput.type(email);
    }

    fillFirstNameInput(firstName){
        cy.get('[id="first_name"]').type(firstName);
    }

    fillLastNameInput(lastName){
        cy.get('[id="last_name"]').type(lastName);
    }

    fillPasswordInput(password){
        cy.get('[id="password"]').type(password);
    }

    checkTermsAndConditionsCheckbox(){
        cy.get('[id="terms_and_conditions"]').check();
    }

    clickSignUpButton(){
        cy.get('[type="submit"]').first().click();
    }

}

module.exports = new SignUpPage();