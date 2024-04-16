describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('www.automationexercise.com')
        cy.get('body').should('be.visible');
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.url().should('eq', 'https://www.automationexercise.com/view_cart')
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.modal-body > :nth-child(2)').click()
        cy.get('[data-qa="signup-name"]').type('Victor');
        cy.get("[data-qa='signup-email']").type('victor.hagiu1@yahoo.com');
        cy.get(".btn.btn-default[data-qa='signup-button']").click()
        cy.get(":nth-child(1) > b ").should('be.visible');
        cy.get('#id_gender1').click()
        cy.get("[data-qa='password']").type('capitala')

        cy.get('[data-qa="days"]').select('24');
        cy.get('[data-qa="months"]').select('March');
        cy.get('[data-qa="years"]').select('1998');
        cy.get('#newsletter').check();
        cy.get('#optin').check();
        cy.get('[data-qa="first_name"]').type('Victor');
        cy.get('[data-qa="last_name"]').type('Hagiu');
        cy.get('[data-qa="company"]').type('SteviTrans');
        cy.get('[data-qa="address"]').type('Stefan cel Mare Nr.1');
        cy.get('[data-qa="address2"]').type('Brailei 36');
        cy.get('[data-qa="country"]').select('United States');
        cy.get('[data-qa="state"]').type('California');
        cy.get('[data-qa="city"]').type('Los Angeles');
        cy.get('[data-qa="zipcode"]').type('90001');
        cy.get('[data-qa="mobile_number"]').type('1234567890');
        cy.get('[data-qa="create-account"]').click();
        cy.get('[data-qa="continue-button"]').click()

        cy.get(':nth-child(10) > a').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(3)').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get(':nth-child(2) > .heading').should("be.visible")
        cy.get(':nth-child(4) > .heading').should("be.visible")
        cy.get('.form-control').type("COMMMMMENNNNt")
        cy.get(':nth-child(7) > .btn').click()
        cy.get("input[name='name_on_card']").type("Hagiu Victor")
        cy.get("input[name='card_number']").type("1111 1111 1111 1111")
        cy.get("input[placeholder='ex. 311']").type("111")
        cy.get("input[placeholder='MM']").type("03")
        cy.get("input[placeholder='YYYY']").type("1998")
        cy.get("#submit").click()
        cy.contains('.col-sm-9 > :nth-child(2)', 'Congratulations! Your order has been confirmed!');
        cy.get('a[href="/delete_account"]').click() // reset
        cy.get('[data-qa="account-deleted"]').contains("Account Deleted")
        cy.get('[data-qa="continue-button"]').click()



    })
})
