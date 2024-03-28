import MainPage from "cypress/pages/MainPage"
import ZoomPhonePage from "cypress/pages/ZoomPhonePage"

describe('tests', () => {
  beforeEach(() => {
    cy.visit('/')
    MainPage.clickAcceptCookies();
  })

  it('"Zoom Phone" and FAQ shown on the Zoom Phone page', () => {
    MainPage.getProductsButton.should('be.visible').and('be.enabled');
    MainPage.clickProductsButton();
    MainPage.getZoomPhoneButton.should('be.visible');
    MainPage.clickZoomPhoneButton();
    MainPage.clickProductsButton();
    ZoomPhonePage.scrollToFAQ();
    ZoomPhonePage.getFAQ.should('be.visible');
  })
})