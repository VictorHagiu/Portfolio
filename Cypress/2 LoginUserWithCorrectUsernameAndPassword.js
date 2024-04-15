describe('My first Test Case', function () {
    it('mY FirstTestCase', function () {
        cy.visit('www.automationexercise.com')
        cy.get('body').should('be.visible');
        cy.get("a[href = '/login']").click();
        cy.get("div[class='login-form'] h2").should('be.visible');
        cy.get("[data-qa='login-email']").type("victor.hagiu1@yahoo.com")
        cy.get('[data-qa="login-password"]').type("capitala")
        cy.get('[data-qa="login-button"]').click()
        cy.get('li:nth-child(10) a:nth-child(1)').should('be.visible');
        cy.get("a[href='/delete_account']").click()
        cy.get("h2[class='title text-center'] b").should('be.visible')



    })

})