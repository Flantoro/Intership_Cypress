class ResourcesPage{
    get getSuccesMessage(){
        return cy.get('[class="c-iaFiUj"] p');
    }

    clickFirstBlogButton(){
        cy.wait(100);
        cy.get('[href="/resources/telnyx-releases-new-inference-product-to-public-beta"][data-is-interactive="true"]').click();
    }

    fillEmailInput(email){
        cy.get('[id="Email"]').type(email);
    }

    clickSubmitButton(){
        cy.get('[type="submit"]').click();
    }

    scrollToEmailInput(){
        cy.get('[id="Email"]').scrollIntoView();
    }
}

module.exports = new ResourcesPage();