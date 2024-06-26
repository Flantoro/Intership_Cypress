import RandomData from "../helpers/RandomData"
import MainPage from "../pages/MainPage"
import SignUpPage from "../pages/SignUpPage"

let email;
let firstName;
let lastName;
let password;

describe('tests', () => {
  beforeEach(() => {
    email = RandomData.generateRandomEmail();
    firstName = RandomData.generateRandomString();
    lastName = RandomData.generateRandomString();
    password = RandomData.generateRandomPassword();
    cy.visit('/')
    MainPage.clickAcceptCookies();
  })

  it('Recaptcha message shown after the registration', () => {
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
    MainPage.clickSignUpButton();
    SignUpPage.fillFirstNameInput(firstName);
    SignUpPage.fillLastNameInput(lastName);
    SignUpPage.fillPasswordInput(password);
    SignUpPage.checkTermsAndConditionsCheckbox();
    SignUpPage.clickSignUpButton();
    SignUpPage.getEmailValidationMessage.should('be.visible');
  })
})