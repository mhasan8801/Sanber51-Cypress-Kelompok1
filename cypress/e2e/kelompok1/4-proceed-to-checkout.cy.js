describe('Proceed to checkout feature in website magento', () => {

  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    cy.get('#email').type('a@com.id'); 
    cy.get('#pass').type('Password1234!'); 
    cy.get('#send2').click();
    cy.url().should('include', 'https://magento.softwaretestingboard.com/')
    cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html')
    cy.get('#option-label-size-143-item-170').click()
    cy.get('#option-label-color-93-item-57').click()
    cy.get('#product-addtocart-button').click()
    cy.wait(4000);
    cy.get('.showcart').click()
  })

  it('Success proceed to checkout', () => {
    cy.get('#top-cart-btn-checkout').click({force: true});
    cy.url().should('include', 'https://magento.softwaretestingboard.com/checkout/#shipping')
    cy.get('[name="company"]').type('sanbercode')
    cy.get('[name="street[0]"]').type('Jln. Tester 404')
    cy.get('[name="street[1]"]').type('Kelurahan Production')
    cy.get('[name="street[2]"]').type('Kecamatan Issue')
    cy.get('[name="city"]').type('Staging')
    cy.get('[name="region_id"]').select('Alabama');
    cy.get('[name="postcode"]').type('1234-1234')
    cy.get('[name="telephone"]').type('081121121121')
    cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
    cy.get('.button.action.continue.primary').click()
    cy.url().should('include', 'https://magento.softwaretestingboard.com/checkout/#payment')
    cy.get('.action.primary.checkout').click()
    cy.url().should('include', 'https://magento.softwaretestingboard.com/checkout/onepage/success/')
    cy.get('.base').should('contain', 'Thank you for your purchase!')
  })
})