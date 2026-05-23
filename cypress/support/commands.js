Cypress.Commands.add('cadastrarUsuario', (usuario, email, senha) => {

  cy.get('[data-testid="cadastrar"]').click()

  cy.get('[data-testid="nome"]').type(usuario)

  cy.get('[data-testid="email"]').type(email)

  cy.get('[data-testid="password"]').type(senha)

  cy.get('[data-testid="checkbox"]').click()

  cy.get('[data-testid="cadastrar"]').click()

})