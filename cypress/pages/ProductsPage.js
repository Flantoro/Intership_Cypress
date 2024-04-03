class ProductsPage{
    get getCommunicationsTab(){
        return cy.get('[href="/products#communications"]');
    }

    get getIoTTab(){
        return cy.get('[href="/products#iot"]').last();
    }

    get getNetworkingTab(){
        return cy.get('[href="/products#networking"]').last();
    }

    get getComputeTab(){
        return cy.get('[href="/products#compute"]').last();
    }

}

module.exports = new ProductsPage();