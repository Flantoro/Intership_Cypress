import RandomData from "cypress/helpers/RandomData"
import MainPage from "cypress/pages/MainPage"
import SignUpPage from "cypress/pages/SignUpPage"

let email = RandomData.generateRandomEmail();

describe('tests', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com/')
    cy.viewport(1920, 1080)
  })

  xit('Verify the email input on the main page', () => {
    MainPage.clickAcceptCookies();
    MainPage.scrollToExploreText();
    MainPage.fillEmailInput(email);
    MainPage.clickBottomSignUpButton();
    SignUpPage.getEmailInput.should('have.value', email);
  })

  it('Product sections are displayed on the Products page ', () => {
    MainPage.clickAcceptCookies();
    MainPage.scrollToSeeProductsButton();
    cy.wait(100);
    MainPage.clickSeeProductsButton();

  })
})