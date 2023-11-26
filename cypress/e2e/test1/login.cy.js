const userDataLogin = require('../../e2e/test1/userDataLogin.json')

describe('verify Magento Login Functionlity', () => {

  it.skip(' sukses login email valid dan password valid', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    cy.get('#email').type(userDataLogin.valid.valid_user); 
    cy.get('#pass').type(userDataLogin.valid.valid_password); 
    cy.get('#send2').click();
    cy.url().should('include', 'https://magento.softwaretestingboard.com/')
  })
  it.skip('login gagal dengan email valid dan password salah', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    cy.get('#email').type(userDataLogin.valid.valid_user); 
    cy.get('#pass').type(userDataLogin.invalid.invalid_password); 
    cy.get('#send2').click(); 
    cy.get('[data-bind="html: $parent.prepareMessageForHtml(message.text)"]').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');

  })
  it.skip(' login gagal dengan email invalid dan password valid', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    cy.get('#email').type('rusdilus@gmail.com');
    cy.get('#pass').type(userDataLogin.valid.valid_password);
    cy.get('#send2').click();
    cy.get('.message-error div').should('be.visible').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.'); 
  });

  it(' login gagal dengan  email tidak lengkap dan password valid', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    cy.get('#email').type(userDataLogin.invalid.invalid_user);
    cy.get('#pass').type(userDataLogin.valid.valid_password);
    cy.get('#send2').click();
    cy.get('#email-error').should('contain', 'Please enter a valid email address (Ex: johndoe@domain.com).'); 
  });

  });
  


