import MainPage from "cypress/pages/MainPage"
import MessagingAPIPage from "cypress/pages/MessagingAPIPage"

describe('tests', () => {
  beforeEach(() => {
    cy.visit('/')
    MainPage.clickAcceptCookies();
  })

  it('The short_code SMS_message price is displayed', () => {    
    MainPage.getPricingButton.should('be.visible').and('be.enabled');
    MainPage.clickPricingButton();
    MainPage.clickMessagingAPIButton();
    MainPage.clickPricingButton();
    MessagingAPIPage.scrollToServicesPart();
    MessagingAPIPage.clickShortCodeButton();
    MessagingAPIPage.getPriceTable.should('contain.text', '$0.007');
  })
})