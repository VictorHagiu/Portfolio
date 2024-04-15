describe('My first Test Case', function () {
    it('mY FirstTestCase', function () {
        cy.visit('www.automationexercise.com')
        cy.get('body').should('be.visible');
        cy.get('#footer').scrollIntoView();
        cy.get('.single-widget>h2').should('have.text', 'Subscription')
        cy.get('#susbscribe_email').type('victor.hagiu1@yahoo.com')
        cy.get('#subscribe').click()
        cy.get('.alert-success').should('be.visible', 'have-text', 'You have been successfully subscribed!')


    })

})