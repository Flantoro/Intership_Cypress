/// <reference types="cypress" />

import MainPage from "cypress/pages/MainPage"
import ContactUsPage from "cypress/pages/ContactUsPage"

//import MainPage from "cypress/pages/MainPage"
//const MainPage = require("../../pages/MainPage")
// import ContactUsPage from "../../pages/ContactUsPage"


describe('tests', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com/')
    cy.viewport(1920, 1080)
  })

  it('Contact Us Button', () => {
    MainPage.clickAcceptCookies();
    MainPage.clickContactUsButton();
    ContactUsPage.getContactUsForm.should('be.visible');
  })
})