describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('www.automationexercise.com')
        cy.get('body').should('be.visible');
        cy.get("a[href = '/login']").click()
        cy.get("div[class='signup-form'] h2").should('be.visible');
        cy.get("[data-qa='login-email']").type("victor.hagiu1@yahoo.com")
        cy.get('[data-qa="login-password"]').type("capitala")
        cy.get('[data-qa="login-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('be.visible')

    })
})