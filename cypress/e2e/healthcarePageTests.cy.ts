import MainPage from "cypress/pages/MainPage"
import SolutionsPage from "cypress/pages/SolutionsPage"


//import MainPage from "cypress/pages/MainPage"
//const MainPage = require("../../pages/MainPage")
// import ContactUsPage from "../../pages/ContactUsPage"


describe('tests', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com/')
    cy.viewport(1920, 1080)
  })

  it('Resources block shown on the Healthcare page', () => {    
    MainPage.clickAcceptCookies();
    MainPage.clickSolutionsButton();
    SolutionsPage.clickSeeIndustriesButton();
    SolutionsPage.clickHealthcareImage();
    SolutionsPage.scrollToResourcesText();
    SolutionsPage.getResourcesText.should('be.visible');
  })
})