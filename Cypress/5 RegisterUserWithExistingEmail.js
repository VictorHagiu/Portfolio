describe('My First Test', () => {
    it('Does not do much!', () => {

        cy.visit('www.automationexercise.com')
        cy.get('body').should('be.visible');

        cy.get("a[href = '/login']").click()
        cy.get("div[class='signup-form'] h2").should('be.visible');
        cy.get('[data-qa="signup-name"]').type('Victor');
        cy.get("[data-qa='signup-email']").type('victor.hagiu1@yahoo.com');
        cy.get(".btn.btn-default[data-qa='signup-button']").click()
        cy.get('.signup-form > form > p').should('be.visible')


    })
})