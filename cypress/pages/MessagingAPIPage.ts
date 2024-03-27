class MessagingAPIPage{
    get getPriceTable() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('//div[@role="tablist"]');
    }

    get getShortCodeButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('//div[@role="tablist"]//button[text()="Short Code"]');
    }

    public clickShortCodeButton() : void{
        this.getShortCodeButton.click();
    }
}

export default new MessagingAPIPage();