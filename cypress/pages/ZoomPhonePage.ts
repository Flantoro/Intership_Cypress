class ZoomPhonePage{
    get getZoomPhoneHeader() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('//h1[text()="Zoom Phone"]');
    }

    get getFAQ() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('//strong[text()="FAQ"]');
    }

    public scrollToFAQ() : void{
        this.getFAQ.scrollIntoView();
    }
}

export default new ZoomPhonePage();