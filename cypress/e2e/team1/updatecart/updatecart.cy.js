const updatecart = require('../../../fixtures/updatecart.json')

describe('update cart', () => {
  it.only('login dan update keranjang', () => {
    //login
    cy.visit('')
    cy.login_masuk_keranjang(updatecart.userlogin.femail,updatecart.userlogin.fpass)
    //cy.get('#top-cart-btn-checkout').click()

    //update keranjang
    cy.get('#cart-486306-qty').type('5')
    cy.get('#cart-486308-qty').type('5')
    cy.get('.update')
  })
})