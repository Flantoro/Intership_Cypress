import MainPage from "cypress/pages/MainPage"
import SolutionsPage from "cypress/pages/SolutionsPage"

describe('tests', () => {
  beforeEach(() => {
    cy.visit('/')
    MainPage.clickAcceptCookies();
  })

  it('Resources block shown on the Healthcare page', () => {    
    MainPage.clickSolutionsButton();
    SolutionsPage.clickSeeIndustriesButton();
    SolutionsPage.clickHealthcareImage();
    SolutionsPage.scrollToResourcesText();
    SolutionsPage.getResourcesText.should('be.visible');
  })
})