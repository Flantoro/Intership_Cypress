import RandomData from "cypress/helpers/RandomData"
import MainPage from "cypress/pages/MainPage"
import SignUpPage from "cypress/pages/SignUpPage"

let email = RandomData.generateRandomEmail();
let firstName = RandomData.generateRandomString();
let lastName = RandomData.generateRandomString();
let password = RandomData.generateRandomPassword();

describe('tests', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com/')
    cy.viewport(1920, 1080)
  })

  it('Recaptcha message shown after the registration', () => {
    MainPage.clickAcceptCookies();
    MainPage.clickSignUpButton();
    SignUpPage.fillEmailInput(email);
    SignUpPage.fillFirstNameInput(firstName);
    SignUpPage.fillLastNameInput(lastName);
    SignUpPage.fillPasswordInput(password);
    SignUpPage.checkTermsAndConditionsCheckbox();
    SignUpPage.clickSignUpButton();
    SignUpPage.getRecaptchaError.should('be.visible');
  })

  it('Velidation error message shown after registration details filled except email', () => {
    MainPage.clickAcceptCookies();
    MainPage.clickSignUpButton();
    SignUpPage.fillFirstNameInput(firstName);
    SignUpPage.fillLastNameInput(lastName);
    SignUpPage.fillPasswordInput(password);
    SignUpPage.checkTermsAndConditionsCheckbox();
    SignUpPage.clickSignUpButton();
    SignUpPage.getEmailValidationMessage.should('be.visible');
  })
})