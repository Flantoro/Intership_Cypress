class SolutionsPage{

    get getResourcesText(){
        return cy.get('section strong').last();
    }

    clickSeeIndustriesButton(){
        cy.get('[title="See industries"]').click();
    }

    clickHealthcareImage(){
        cy.get('[href="/solutions/healthcare"]').first().click();
    }

    scrollToResourcesText(){
        this.getResourcesText.scrollIntoView();
    }
}

module.exports = new SolutionsPage();