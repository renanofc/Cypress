
Cypress.Commands.add('login', (nome, senha) => {

    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.get('input[formcontrolname="password"]').type(senha, {log:false}); // {log:fase} é para esconder os logs da senha no teste
    cy.get('button[type="submit"]').click();

})