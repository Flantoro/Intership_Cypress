import MainPage from "cypress/pages/MainPage"
import ContactUsPage from "cypress/pages/ContactUsPage"

//import MainPage from "cypress/pages/MainPage"
//const MainPage = require("../../pages/MainPage")
// import ContactUsPage from "../../pages/ContactUsPage"


describe('tests', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com/')
    cy.viewport(1920, 1080)
  })

  it('Talk to an expert" form shown on the Contact-Us page', () => {
    MainPage.clickAcceptCookies();
    MainPage.clickContactUsButton();
    ContactUsPage.getContactUsForm.should('be.visible');
  })

  it('Validation error is shown on the Contact Us page without specifying details', () => {
    MainPage.clickAcceptCookies();
    MainPage.clickContactUsButton();
    ContactUsPage.clickSubmitButton();
    ContactUsPage.getValidationMessage.should('be.visible');
  })
})