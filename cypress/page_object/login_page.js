export class LoginPage {
    navigate(url) {
        cy.visit(url)
    }

    clickSign() {
        cy.get('.v-btn__content').click()
    }

    // inputUsername(username) {
    //     cy.get(this.txt_username).type(username)
    // }

    // inputPassword(password) {
    //     cy.get(this.txt_password).type(password)
    // }

    // clickLogin() {
    //     cy.get(this.btn_masuk).click()
    // }

    assertLoginSuccess() {
        cy.url().should('contain', '/dashboard/')
    }

    assertLoginFail() {
        cy.get('.validation-summary-errors').should('be.visible')
    }

    login(url, username, password) {
        this.navigate(url)
        this.clickSign()
        cy.origin('https://xdev.equine.co.id', {args : {username, password}} ,({username, password}) => {
            cy.get('[name="Username"]').type(username)
            cy.get('[name="Password"]').type(password)
            cy.get('[value="login"]').click()
            // this.inputUsername(username)
            // this.inputPassword(password)
            // this.clickLogin()
        })
        cy.wait(500)
    }
}