describe('create account', () => {
  it.skip('should fail to create an account with invalid data', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type('John')
    cy.get('#lastname').type('Doe')
    
    // Do not fill in email, password, and confirmation fields intentionally to trigger a failure
    // cy.get('#email_address').should('be.visible').should('be.enabled').type('') 
    // cy.get('#password').clear().type('');
    // cy.get('#password-confirmation').clear().type('');
    
    cy.get('.action.submit.primary').click()

    // Add assertions for failed account creation, you might check for error messages or stay on the same page.
    cy.url().should('include', '/customer/account/create/'); // Assuming failed creation stays on the registration page
    cy.get('.error-msg').should('be.visible'); // Assuming there is an error message indicating the failure
  })

  it('passes', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type('John')
    cy.get('#lastname').type('Doe')
    cy.get('#email_address').should('be.visible').should('be.enabled').type('johndoe@gmail.com')
    cy.get('#password').clear().type('yourpassword');
    cy.get('#password-confirmation').clear().type('yourpassword');
    cy.get('.action.submit.primary').click()
  })
})