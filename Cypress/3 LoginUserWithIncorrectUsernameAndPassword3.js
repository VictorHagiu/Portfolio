describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('www.automationexercise.com')
        cy.get('body').should('be.visible');
        cy.get("a[href = '/login']").click();
        cy.get("[data-qa='login-email']").type("victor.hagiu1@yahoo.com")
        cy.get('[data-qa="login-password"]').type("capitala1")
        cy.get('[data-qa="login-button"]').click()
        cy.get('.login-form > form > p').should('be.visible');


    })
})