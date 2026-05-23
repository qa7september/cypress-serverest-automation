describe('Teste de funcionalidades', () => {
  beforeEach(() => {
  cy.visit('https://front.serverest.dev/login')
  })

it('Excluir produtos existentes da lista', () => {
    const usuario = `Teste Cypress ${Date.now()}`
    const email = `testecy${Date.now()}@gmail.com`
    const senha = '123456'
    cy.cadastrarUsuario(usuario, email, senha)
    cy.get('[data-testid="listarProdutos"]').click()
    cy.get(':nth-child(1) > :nth-child(6) > .row > .btn-danger').click()
    cy.contains('Produto excluído com sucesso')
  })

it('Editar produtos da lista', () => {
    const usuario = `Teste Cypress ${Date.now()}`
    const email = `testecy${Date.now()}@gmail.com`
    const senha = '123456'
    cy.cadastrarUsuario(usuario, email, senha)
    cy.get('[data-testid="listarProdutos"]').click()
    cy.contains('Edite seu produto')
  })

it('Cadastrar produtos', () => {
    const produto = `Produto Teste ${Date.now()}`
    const usuario = `Teste Cypress ${Date.now()}`
    const email = `testecy${Date.now()}@gmail.com`
    const senha = '123456'
    cy.cadastrarUsuario(usuario, email, senha)
    cy.get('[data-testid="cadastrarProdutos"]').click()
    cy.get('[data-testid="nome"]').type(produto)
    cy.get('[data-testid="preco"]').type('100')
    cy.get('[data-testid="descricao"]').type('Descrição do produto teste')
    cy.get('[data-testid="quantity"]').type('10')
    cy.get('[data-testid="cadastarProdutos"]').click()
    cy.contains(produto)
  })

  it('Cadastrar e excluir produto criado', () => {
    const produto = `ptest${Date.now()}`
    const usuario = `Teste Cypress ${Date.now()}`
    const email = `testecy${Date.now()}@gmail.com`
    const senha = '123456'
    cy.cadastrarUsuario(usuario, email, senha)
    cy.get('[data-testid="cadastrarProdutos"]').click()
    cy.get('[data-testid="nome"]').type(produto)
    cy.get('[data-testid="preco"]').type('100')
    cy.get('[data-testid="descricao"]').type('Descrição do produto teste')
    cy.get('[data-testid="quantity"]').type('10')
    cy.get('[data-testid="cadastarProdutos"]').click()
      cy.contains(produto)
    cy.contains('td', produto)
      .parent()
      .find('.btn-danger')
      .click()
  })
})
