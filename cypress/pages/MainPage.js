Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

class MainPage {

    get getProductsButton(){
        return cy.get('[id="radix-:Rkljm:"]');
    }

    get getSolutionsButton(){
        return cy.get('[href="/solutions"]').first();
    }

    get getPricingButton(){
        return cy.get('[id="radix-:Rlljm:"]');
    }

    get getResourcesButton(){
        return cy.get('[id="radix-:Rmljm:"]');
    }

    get getZoomPhoneButton(){
        return cy.get('[href="/products/enterprise-integrations-zoom-phone"]').first();
    }

    get getSeeProductsButton(){
        return cy.get('[href="/products"]').last();
    }

    get getMessagingAPIButton(){
        return cy.get('[href="/pricing/messaging"]').first();
    }

    get getBlogButton(){
        return cy.get('[href="/resources"]').first();
    }

    get getExploreText(){
        return cy.get('[action="/sign-up"]');
    }


    get getAcceptCookiesButton(){
        return cy.get('[id="onetrust-accept-btn-handler"]');
    }
    scrollToExploreText(){
        this.getExploreText.scrollIntoView();
    }

    clickAcceptCookies(){
        this.getAcceptCookiesButton.click();
    }

    clickProductsButton(){
        this.getProductsButton.realClick();
    }

    clickSolutionsButton(){
        this.getSolutionsButton.click();
    }

    clickPricingButton(){
        this.getPricingButton.realClick();
    }

    clickResourcesButton(){
        this.getResourcesButton.realClick();
    }

    clickContactUsButton(){
        cy.get('[href="/contact-us"]').first().click();
    }

    clickSignUpButton(){
        cy.get('[action="/sign-up"] button').first().click();
    }

    clickZoomPhoneButton(){
        this.getZoomPhoneButton.click();
    }

    clickSeeProductsButton(){
        this.getSeeProductsButton.click();
    }

    clickMessagingAPIButton(){
        this.getMessagingAPIButton.click();
    }

    clickBlogButton(){
        this.getBlogButton.click();
    }

    fillEmailInput(email){
        cy.get('[id="email"]').type(email);
    }

    clickBottomSignUpButton(){
        cy.get('[action="/sign-up"] button').first().click();
    }

    scrollToSeeProductsButton(){
        this.getSeeProductsButton.scrollIntoView();
    }
}

module.exports = new MainPage();