import MainPage from "cypress/pages/MainPage"
import MessagingAPIPage from "cypress/pages/MessagingAPIPage"
import SolutionsPage from "cypress/pages/SolutionsPage"

describe('tests', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com/')
    cy.viewport(1920, 1080)
  })

  it('The short_code SMS_message price is displayed', () => {    
    MainPage.clickAcceptCookies();
    MainPage.getPricingButton.should('be.visible').and('be.enabled');
    MainPage.clickPricingButton();
    MainPage.clickMessagingAPIButton();
    MainPage.clickPricingButton();
    MessagingAPIPage.scrollToServicesPart();
    MessagingAPIPage.clickShortCodeButton();
    MessagingAPIPage.getPriceTable.should('contain.text', '$0.007');
  })
})