import RandomData from "cypress/helpers/RandomData"
import MainPage from "cypress/pages/MainPage"
import ProductsPage from "cypress/pages/ProductsPage";
import SignUpPage from "cypress/pages/SignUpPage"

let email : string;

describe('tests', () => {
  beforeEach(() => {
    email = RandomData.generateRandomEmail();
    cy.visit('/')
    MainPage.clickAcceptCookies();
  })

  it('Verify the email input on the main page', () => {
    MainPage.scrollToExploreText();
    MainPage.fillEmailInput(email);
    MainPage.clickBottomSignUpButton();
    SignUpPage.getEmailInput.should('have.value', email);
  })

  it('Product sections are displayed on the Products page ', () => {
    MainPage.scrollToSeeProductsButton();
    cy.wait(100);
    MainPage.clickSeeProductsButton();
    ProductsPage.getCommunicationsTab.should('be.visible');
    ProductsPage.getIoTTab.should('be.visible');
    ProductsPage.getNetworkingTab.should('be.visible');
    ProductsPage.getComputeTab.should('be.visible');
  })
})