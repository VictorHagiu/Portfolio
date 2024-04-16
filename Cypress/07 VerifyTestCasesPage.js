describe('My First Test', () => {
    it('Does not do much!', () => {

        cy.visit('www.automationexercise.com')
        cy.get('body').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(5)').click()

        cy.url("https://www.automationexercise.com/test_cases").should('include', '/test_cases')




    })
})
