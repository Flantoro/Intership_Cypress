class ZoomPhonePage{
    get getZoomPhoneHeader(){
        return cy.get('//h1[text()="Zoom Phone"]');
    }

    get getFAQ(){
        return cy.get('div strong').last();
    }

    scrollToFAQ(){
        this.getFAQ.scrollIntoView();
    }
}

module.exports = new ZoomPhonePage();