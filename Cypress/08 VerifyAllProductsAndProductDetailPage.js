describe('My First Test', () => {
    it('Does not do much!', () => {

        cy.visit('www.automationexercise.com')
        cy.get('body').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.url("https://www.automationexercise.com/products").should('include', '/products')
        cy.get('.features_items').should("be.visible")
        cy.get("a[href='/product_details/1']").click()
        cy.get('.product-information > h2').should('be.visible')
        cy.get('.product-information > :nth-child(3)').should("be.visible")
        cy.get(':nth-child(5) > span').should("be.visible")
        cy.get('.product-information > :nth-child(6)').should("be.visible")
        cy.get('.product-information > :nth-child(7)').should("be.visible")
        cy.get('.product-information > :nth-child(8)').should("be.visible")

    })
})
