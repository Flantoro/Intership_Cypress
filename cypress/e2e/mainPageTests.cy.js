import RandomData from "../helpers/RandomData"
import MainPage from "../pages/MainPage"
import ProductsPage from "../pages/ProductsPage";
import SignUpPage from "../pages/SignUpPage"

let email;

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
    ProductsPage.getCommunicationsTab.should('be.visible');
    ProductsPage.getIoTTab.should('be.visible');
    ProductsPage.getNetworkingTab.should('be.visible');
    ProductsPage.getComputeTab.should('be.visible');
  })
})