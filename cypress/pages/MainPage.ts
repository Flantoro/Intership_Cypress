class MainPage {

    get getAcceptCookies(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('[id="onetrust-accept-btn-handler"]');
    }
    get getProductsButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="radix-:Rkljm:"]');
    }

    get getSolutionsButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[href="/solutions"]').first();
    }

    get getPricingButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="radix-:Rlljm:"]');
    }

    get getResourcesButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="radix-:Rmljm:"]');
    }

    get getContactUsButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[href="/contact-us"]');
    }

    get getSignUpButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="header-sign-up"]');
    }

    get getZoomPhoneButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[href="/products/enterprise-integrations-zoom-phone"]').first();
    }

    get getSeeProductsButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[href="/products"]').last();
    }

    get getMessagingAPIButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[href="/pricing/messaging"]').first();
    }

    get getBlogButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('//div[@role="menu"]//a[@href="/resources"]');
    }

    get getEmailInput() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="email"]');
    }

    get getBottomSignUpButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[action="/sign-up"] button');
    }

    get getExploreText() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[action="/sign-up"]');
    }

    public scrollToExploreText() : void {
        this.getExploreText.scrollIntoView();
    }

    public clickAcceptCookies() : void{
        this.getAcceptCookies.click();
    }

    public clickProductsButton() : void{
        this.getProductsButton.realClick();
    }

    public clickSolutionsButton() : void{
        this.getSolutionsButton.click();
    }

    public clickPricingButton() : void{
        this.getPricingButton.realClick();
    }

    public clickResourcesButton() : void{
        this.getResourcesButton.realClick();
    }

    public clickContactUsButton() : void{
        this.getContactUsButton.first().click();
    }

    public clickSignUpButton() : void{
        this.getSignUpButton.click();
    }

    public clickZoomPhoneButton() : void{
        this.getZoomPhoneButton.click();
    }

    public clickSeeProductsButton() : void{
        this.getSeeProductsButton.click();
    }

    public clickMessagingAPIButton() : void{
        this.getMessagingAPIButton.click();
    }

    public clickBlogButton() : void{
        this.getBlogButton.click();
    }

    public fillEmailInput(email : string) : void{
        this.getEmailInput.type(email);
    }

    public clickBottomSignUpButton() : void{
        this.getBottomSignUpButton.click();
    }

    public scrollToSeeProductsButton() : void{
        this.getSeeProductsButton.scrollIntoView();
    }
}

export default new MainPage();