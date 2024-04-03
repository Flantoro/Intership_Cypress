import MainPage from "../pages/MainPage"
import RandomData from "../helpers/RandomData";
import ResourcesPage from "../pages/ResourcesPage";

let email;

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
    ResourcesPage.clickFirstBlogButton();
    ResourcesPage.scrollToEmailInput();
    ResourcesPage.fillEmailInput(email);
    ResourcesPage.clickSubmitButton();
    ResourcesPage.getSuccesMessage.should('be.visible');
  })
})