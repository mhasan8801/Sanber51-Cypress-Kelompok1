
Cypress.Commands.add('login', (username, password) => {
    cy.visit('')
    cy.get('#email').type(username); 
    cy.get('#pass').type(password); 
    cy.get('#send2').click();
    cy.url().should('include', 'https://magento.softwaretestingboard.com/')
})

Cypress.Commands.add('chooseProduct', (size, color) => {
    cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html')
    cy.get(size).click()
    cy.get(color).click()
    cy.get('#product-addtocart-button').click()
    cy.wait(15000);
})


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