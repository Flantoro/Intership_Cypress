class MessagingAPIPage{
    get getServicesPart(){
        return cy.get('[id="Services"]');
    }

    get getPriceTable(){
        return cy.get('div[id="Services"] td span[class="c-PJLV"]').first();
    }

    clickShortCodeButton(){
        cy.get('div[role="tablist"] button').eq(2).click();
    }

    scrollToServicesPart(){
        this.getServicesPart.scrollIntoView();
    }
}

module.exports = new MessagingAPIPage();
