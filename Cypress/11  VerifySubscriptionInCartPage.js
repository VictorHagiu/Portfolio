describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('www.automationexercise.com')
        cy.get('body').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('#footer').scrollIntoView();
        cy.get('.single-widget>h2').should('have.text', 'Subscription')
        cy.get('#susbscribe_email').type('victor.hagiu1@yahoo.com')
        cy.get('#subscribe').click()
        cy.get('.alert-success').should('be.visible', 'have-text', 'You have been successfully subscribed!')



    })
})