import MainPage from "cypress/pages/MainPage"
import RandomData from "cypress/helpers/RandomData";
import ResourcesPage from "cypress/pages/ResourcesPage";

let email : string;

describe('tests', () => {
  beforeEach(() => {
    email = RandomData.generateRandomEmail();
    cy.visit('/')
    MainPage.clickAcceptCookies();
  })

  it('The success message shown after subscribing for a blog', () => {    
    MainPage.getResourcesButton.should('be.visible').and('be.enabled');
    MainPage.clickResourcesButton();
    MainPage.clickBlogButton();
    MainPage.clickResourcesButton();
    ResourcesPage.clickFirstBlogButton();
    ResourcesPage.scrollToEmailInput();
    ResourcesPage.fillEmailInput(email);
    ResourcesPage.clickSubmitButton();
    ResourcesPage.getSuccesMessage.should('be.visible');
  })
})