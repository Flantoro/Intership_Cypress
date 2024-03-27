class MainPage {

    get getAcceptCookies(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get('[id="onetrust-accept-btn-handler"]');
    }
    get getProductsButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('//button[@id="radix-:Rkljm:"]');
    }

    get getSolutionsButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('//button[@id="radix-:Rlljm:"]/preceding-sibling::a');
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
        return cy.get('//*[@role="menu"]//a[@href="/products/enterprise-integrations-zoom-phone"]');
    }

    get getSeeProductsButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('//div[@data-index="0"]//a[@href="/products"]');
    }

    get getMessagingAPIButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('//div[@role="menu"]//a[@href="/pricing/messaging"]');
    }

    get getBlogButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('//div[@role="menu"]//a[@href="/resources"]');
    }

    get getGetEmailInput() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="email"]');
    }

    get getBottomSignUpButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[action="/sign-up"] button');
    }

    public clickAcceptCookies() : void{
        this.getAcceptCookies.click();
    }

    public clickProductsButton() : void{
        this.getProductsButton.click();
    }

    public clickSolutionsButton() : void{
        this.getSolutionsButton.click();
    }

    public clickPricingButton() : void{
        this.getPricingButton.click();
    }

    public clickResourcesButton() : void{
        this.getResourcesButton.click();
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
        this.getGetEmailInput.get(email);
    }

    public clickBottomSignUpButton() : void{
        this.getBottomSignUpButton.click();
    }
}

export default new MainPage();