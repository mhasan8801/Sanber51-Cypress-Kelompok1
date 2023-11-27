import loginPage from '../../support/pageObject/loginPage';
const userDataLogin = require('../../e2e/test1/userDataLogin.json')

describe('verify Magento Login Functionlity', () => {

  it(' sukses login email valid dan password valid', () => {
    cy.visit('')
    loginPage.inputEmail(userDataLogin.valid.valid_user)
    loginPage.inputPassword(userDataLogin.valid.valid_password)
    loginPage.clickLogin()
    cy.url().should('include', 'https://magento.softwaretestingboard.com/')

  })
 
 
  it('login gagal tanpa karakter @ pada alamat email', () => {
    cy.visit(''); 
    loginPage.inputEmail(userDataLogin.invalid.invalid_user)
    loginPage.inputPassword(userDataLogin.valid.valid_password)
    loginPage.clickLogin()     
    cy.get('#email-error').should('be.visible').and('contain', 'Please enter a valid email address (Ex: johndoe@domain.com).');
  });
  
  it('login gagal dengan email valid dan password salah', () => {
    cy.visit('')
    loginPage.inputEmail(userDataLogin.valid.valid_user)
    loginPage.inputPassword(userDataLogin.invalid.invalid_password)
    loginPage.clickLogin()
    cy.get('[data-bind="html: $parent.prepareMessageForHtml(message.text)"]').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');


  })
  it(' login gagal dengan email tidak terdaftar dan password valid', () => {
    cy.visit('')
    cy.login('rusdiklh@gmail.com', 'Panyabungan27')
    cy.get('.message-error div').should('be.visible').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.'); 

  });

  it('sukses login email valid dan password valid - dengan CUSTOM COMMANDS', () => {
    cy.visit('')
    cy.login('rusdilubism@gmail.com', 'Panyabungan27');
    cy.url().should('include', 'https://magento.softwaretestingboard.com/')
   
  });  

  });
  


