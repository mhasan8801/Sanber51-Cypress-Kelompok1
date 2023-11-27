class loginPage{
    email = '#email'
    pswd = '#pass'
    login_btn = '#send2'
    

    inputEmail(email){
        cy.get(this.email).type(email)
    }

    inputPassword(pass){
        cy.get(this.pswd).type(pass)
    }
    clickLogin(){
        cy.get(this.login_btn).click()
    }

   

}

export default new loginPage()