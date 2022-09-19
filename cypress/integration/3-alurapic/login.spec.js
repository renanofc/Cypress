describe('Login de usuarios', () => {

    beforeEach(() => {
      cy.visit('https://alura-fotos.herokuapp.com')

     })

     it('fazer login de usuario valido', () => {
        cy.login('flavio', '123')
        cy.contains('a', '(Logout)').should('be.vesible');
    })

    it('fazer login de usuario invalido', () => {
        cy.login('aaaaass', '2121sss')
        cy.on ('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })

})