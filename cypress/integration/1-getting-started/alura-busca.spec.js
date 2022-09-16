describe('alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('https://www.alura.com.br');
    })

    it('buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type ('java'); // Escrever no local indicado
        cy.get('.header-barraBusca-form-submit').click(); // Para clicar em determinado local indicado
        cy.get('h4.busca-resultado-nome')
            .should('contain', 'Formação Java e Orientação a Objetos');
    })

})