import pageupdatecart from '../support/pageupdatecart'
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add('login_masuk_keranjang', (cemail, cpass) => {
    //cy.get('.panel > .header > .authorization-link').click()
    //cy.get('#email').type(cemail)
    //cy.get('#pass').type(cpass)
    //cy.get('#send2').click()
    //cy.get('.showcart').click()
    cy.get(pageupdatecart.otombolloginpage).click()
    cy.get(pageupdatecart.oemail).type(cemail)
    cy.get(pageupdatecart.opass).type(cpass)
    cy.get(pageupdatecart.otombollogin).click()
    cy.get(pageupdatecart.otombolcart).click()
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })