import MainPage from "cypress/pages/MainPage"
import ContactUsPage from "cypress/pages/ContactUsPage"

describe('tests', () => {
  beforeEach(() => {
    cy.visit('/')
    MainPage.clickAcceptCookies();
  })

  it('Talk to an expert" form shown on the Contact-Us page', () => {
    MainPage.clickContactUsButton();
    ContactUsPage.getContactUsForm.should('be.visible');
  })

  it('Validation error is shown on the Contact Us page without specifying details', () => {
    MainPage.clickContactUsButton();
    ContactUsPage.clickSubmitButton();
    ContactUsPage.getValidationMessage.should('be.visible');
  })
})