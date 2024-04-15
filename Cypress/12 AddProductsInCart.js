describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('www.automationexercise.com')
        cy.get('body').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(2)').click()

        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').realHover()

        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').contains('Add to cart', { force: true }).click();
        cy.get('.modal-footer > .btn').click()


        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').realHover()

        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').contains('Add to cart', { force: true }).click();

        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3)').click()
        cy.get('#product-1 > .cart_description > h4 > a').should('be.visible')
        cy.get('#product-2 > .cart_description > h4 > a').should('be.visible')
        cy.get('#product-1 > .cart_price > p').should('be.visible')
        cy.get('#product-2 > .cart_price > p').should('be.visible')
        cy.get('#product-1 > .cart_quantity').should('be.visible')
        cy.get('#product-2 > .cart_quantity').should('be.visible')
        cy.get('#product-1 > .cart_total > .cart_total_price').should('be.visible')
        cy.get('#product-2 > .cart_total > .cart_total_price').should('be.visible')


    })
})