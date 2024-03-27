import MainPage from "cypress/pages/MainPage"
import ZoomPhonePage from "cypress/pages/ZoomPhonePage"


//import MainPage from "cypress/pages/MainPage"
//const MainPage = require("../../pages/MainPage")
// import ContactUsPage from "../../pages/ContactUsPage"


describe('tests', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com/')
    cy.viewport(1920, 1080)
  })

  it('"Zoom Phone" and FAQ shown on the Zoom Phone page', () => {
    MainPage.clickAcceptCookies();
    MainPage.clickProductsButton();
    MainPage.clickZoomPhoneButton();
    //MainPage.clickProductsButton();
    ZoomPhonePage.scrollToFAQ();
    ZoomPhonePage.getFAQ.should('be.visible');
  })
})