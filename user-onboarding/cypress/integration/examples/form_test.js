describe('Inputs and cancel button', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
    })

    it('can input name', () => {
        cy.get('input[name=username]')
            .type('Bananaboi')
            .should('have.value', 'Bananaboi')
    })

    it('can input email', () => {
        cy.get('input[name=email]')
            .type('banz@ban.com')
            .should('have.value', 'banz@ban.com')
    })

    it('can input password', () => {
        cy.get('input[name=password]')
            .type('secretCVit')
            .should('have.value', 'secretCVit')
    })

    it('Make sure can not submit without all forms filled', () => {
        cy.get('button#submitBtn').should('be.disabled')
    })

    it('See if we can check the TOS', () => {
        cy.get('input[name=TOS]')
            .check()
            .should('have.value', 'on')
    })

    it('Make sure can not submit without all forms filled', () => {
        cy.get('button#submitBtn').should('not.be.disabled')
    })

})