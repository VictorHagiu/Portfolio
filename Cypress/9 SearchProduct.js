describe('My First Test', () => {
    it('Does not do much!', () => {

        cy.visit('www.automationexercise.com')
        cy.get('body').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(2)').click()
        cy.get('.title').should('be.visible')
        cy.get('.features_items').should('be.visible')
        const searchQuery = 'Pink';
        const expectedResults = ['Half Sleeves Top Schiffli Detailing - Pink', 'Full Sleeves Top Cherry - Pink', 'Sleeves Top and Short - Blue & Pink'];

        cy.get('#search_product').type(searchQuery);
        cy.get('#submit_search').click()

        cy.get('.productinfo > p').each(($result, index) => {
            cy.wrap($result).should('contain.text', searchQuery);



        });




    })
})