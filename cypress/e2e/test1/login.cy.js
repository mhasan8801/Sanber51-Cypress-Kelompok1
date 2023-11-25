describe('verify Magento Login Functionlity', () => {

  it(' sukses  email valid dan password valid', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    cy.get('#email').type('rusdilubism@gmail.com'); 
    cy.get('#pass').type('Panyabungan27'); 
    cy.get('#send2').click();
    cy.url().should('include', 'https://magento.softwaretestingboard.com/')
  })
  it('menampilkan kesalahan untuk email valid dan password salah', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    cy.get('#email').type('rusdilubism@gmail.com'); 
    cy.get('#pass').type('ererf'); 
    cy.get('#send2').click(); 
    cy.get('[data-bind="html: $parent.prepareMessageForHtml(message.text)"]').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');

  })
  it(' menampilkan pesan salah dari email invalid dan password valid', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    cy.get('#email').type('rusdilub@gmail.com');
    cy.get('#pass').type('Panyabungan27');
    cy.get('#send2').click();
    cy.get('.message-error div').should('be.visible').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');
 
  });

  });
  


