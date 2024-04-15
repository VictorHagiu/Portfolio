describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('www.automationexercise.com')
        cy.get('body').should('be.visible');
        cy.get("a[href='/product_details/1']").click()

        cy.url().should('eq', 'https://www.automationexercise.com/product_details/1');
        cy.get('#quantity').clear().type('4')
        cy.get("button[type='button']").click()

        cy.get('u').click()
        cy.get('#product-1').should('be.visible')
        cy.get('#product-1 .cart_quantity .disabled').should('have.text', '4')





    })
})