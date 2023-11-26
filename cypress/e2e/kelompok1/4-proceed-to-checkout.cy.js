describe('Proceed to checkout feature in website magento', () => {
  it('Success proceed to checkout', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    cy.get('#email').type('mhasan@test.id'); 
    cy.get('#pass').type('Password1234!'); 
    cy.get('#send2').click();
    cy.url().should('include', 'https://magento.softwaretestingboard.com/')
    cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html')
    cy.get('#option-label-size-143-item-170').click()
    cy.get('#option-label-color-93-item-57').click()
    cy.get('#product-addtocart-button').click()
    cy.get('.action.showcart').click()
    cy.get('#top-cart-btn-checkout').click({force: true});
    cy.get('#TE6AB99').type('sanbercode')
    cy.get('#J0MOOD1').type('Jln. Tester 404')
    cy.get('#NVIJL4S').type('Kelurahan Bug')
    cy.get('#CRQBOGR').type('Kecamatan Issue')
    cy.get('#V1P79GR').type('Staging')
    cy.get('#select').click(); 
    cy.contains('Alabama')
    cy.get('#select').should('have.text', 'Alabama');
  })
})