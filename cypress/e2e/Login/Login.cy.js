describe('Teste de login failed', () => {
  beforeEach(() => {
  cy.visit('https://front.serverest.dev/login')
})

  it('Login com email inválido', () => {
    cy.get('[data-testid="email"]').type('glauberqa@gmail.com')
    cy.get('[data-testid="senha"]').type('123456')
    cy.get('[data-testid="entrar"]').click()
    cy.contains('Email e/ou senha inválidos')
  })

  it('Login com senha inválida', () => {
    const usuario = `Teste Cypress ${Date.now()}`
    const email = `testecy${Date.now()}@gmail.com`
    const senha = '123456'
   cy.cadastrarUsuario(usuario, email, senha)
    cy.get('[data-testid="relatorios"]').click()
    cy.get('[data-testid="logout"]').click()
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="senha"]').type('senhaerrada')
    cy.get('[data-testid="entrar"]').click()
    cy.contains('Email e/ou senha inválidos')
  })

  it('Criar usuário e fazer login', () => {
    const usuario = `Teste Cypress ${Date.now()}`
    const email = `testecy${Date.now()}@gmail.com`
    const senha = '123456'
    cy.cadastrarUsuario(usuario, email, senha)
    cy.get('[data-testid="relatorios"]').click()
    cy.get('[data-testid="logout"]').click()
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="senha"]').type(senha)
    cy.get('[data-testid="entrar"]').click()
    cy.contains('Bem Vindo ' + usuario)
  })
})