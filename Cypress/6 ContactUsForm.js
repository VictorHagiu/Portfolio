describe('My First Test', () => {
    it('Does not do much!', () => {

        cy.visit('www.automationexercise.com');
        cy.get('body').should('be.visible');
        cy.get("a[href='/contact_us']").click();
        // cy.get('.shop-menu > .nav > :nth-child(8) > a').click()
        cy.get('div.contact-form > .title').should('be.visible')
        cy.get('[data-qa="name"]').type('Victor')
        cy.get('[data-qa="email"]').type("victor.hagiu1@yahoo.com")
        cy.get('[data-qa="subject"] ').type("problems with the login")
        cy.get('[data-qa="message"]').type("When i try to log into my account the page is freezing")

        cy.fixture('Pilot.png').then(fileContent => {
            cy.get("input[name='upload_file']").attachFile({

                fileContent: fileContent,
                fileName: 'Pilot.png',

            });
        });
        cy.get('[data-qa="submit-button"]').click()
        cy.get('.status').should('be.visible')
        cy.get('.nav > :nth-child(1) > a').click()



    })
})