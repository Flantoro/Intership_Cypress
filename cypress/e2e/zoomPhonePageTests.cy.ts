import MainPage from "cypress/pages/MainPage"
import ZoomPhonePage from "cypress/pages/ZoomPhonePage"


//import MainPage from "cypress/pages/MainPage"
//const MainPage = require("../../pages/MainPage")
// import ContactUsPage from "../../pages/ContactUsPage"


describe('tests', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com/')
  })

  it('"Zoom Phone" and FAQ shown on the Zoom Phone page', () => {
    MainPage.clickAcceptCookies();
    MainPage.getProductsButton.should('be.visible').and('be.enabled');
    MainPage.clickProductsButton();
    MainPage.getZoomPhoneButton.should('be.visible');
    MainPage.clickZoomPhoneButton();
    MainPage.clickProductsButton();
    ZoomPhonePage.scrollToFAQ();
    ZoomPhonePage.getFAQ.should('be.visible');
  })
})