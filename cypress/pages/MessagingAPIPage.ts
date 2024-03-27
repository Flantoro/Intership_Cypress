class MessagingAPIPage{
    get getServicesPart() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="Services"]');
    }

    get getPriceTable() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('div[id="Services"] td span[class="c-PJLV"]').first();
    }

    get getShortCodeButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('div[role="tablist"] button').eq(2);
    }

    public clickShortCodeButton() : void{
        this.getShortCodeButton.click();
    }

    public scrollToServicesPart() : void{
        this.getServicesPart.scrollIntoView();
    }
}

export default new MessagingAPIPage();