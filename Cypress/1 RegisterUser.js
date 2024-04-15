

describe('My first Test Case', function () {
    it('mY FirstTestCase', function () {
        cy.visit('www.automationexercise.com')
        cy.get('body').should('be.visible');

        cy.get("a[href = '/login']").click()
        cy.get("div[class='signup-form'] h2").should('be.visible');
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
        cy.get('[data-qa="create-account"]').click()
        cy.get('b').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        // cy.get('a[href="/delete_account"]').click()
        // cy.get('[data-qa="continue-button"]').click()

    })

})