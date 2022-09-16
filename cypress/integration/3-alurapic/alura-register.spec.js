describe('alura pic register', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/');
    })

    it('registrar', () => {
        
        cy.get('p > a').click();
        cy.get(':nth-child(1) > .form-control').type ('renanmoreira.po@gmail.com');
        cy.get(':nth-child(2) > .form-control').type ('Renan Moreira');
        cy.get(':nth-child(3) > .form-control').type ('renandev');
        cy.get(':nth-child(4) > .form-control').type ('123123ll');
        cy.get('.btn').click();
     
    })

})