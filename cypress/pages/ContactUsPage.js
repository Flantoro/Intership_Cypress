Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
class ContactUsPage{
    get getContactUsForm(){
        return cy.get('[title="Contact us"]');
    }

    get getReasonForContact() {
        return cy.get('[id="Reason_for_Contact__c"]');
    }
    
    get getValidationMessage(){
        return cy.get('[class="mktoErrorMsg"]');
    }

    clickSubmitButton(){
        cy.get('[type="submit"]').click();
    }
}

module.exports = new ContactUsPage();