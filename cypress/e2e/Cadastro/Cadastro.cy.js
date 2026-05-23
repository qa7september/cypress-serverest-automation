describe('Teste de cadastro', () => {
  beforeEach(() => {
  cy.visit('https://front.serverest.dev/login')
})

  it('Cadastro feito com sucesso', () => {
    const usuario = `Teste Cypress ${Date.now()}`
    const email = `testecy${Date.now()}@gmail.com`
    cy.cadastrarUsuario(usuario, email, '123456')
    cy.contains('Cadastro realizado com sucesso')
  })

  it('Cadastro com email já existente', () => {
    const usuario = `Teste Cypress ${Date.now()}`
    const email = `testecy${Date.now()}@gmail.com`
    const senha = '123456'
    cy.cadastrarUsuario(usuario, email, senha)
    cy.get('[data-testid="relatorios"]').click()
    cy.get('[data-testid="logout"]').click()
    cy.cadastrarUsuario(usuario, email, senha)
    cy.contains('Este email já está sendo usado')  
  })

  it('Cadastro com username já existente', () => {
   const usuario = 'USER IGUAL'
   const email1 = `usuario${Date.now()}@gmail.com`
   const email2 = `usuario${Math.floor(Math.random() * 100000)}@gmail.com`
   cy.cadastrarUsuario(usuario, email1, '123456')
   cy.get('[data-testid="listarUsuarios"]').click()
   cy.get('[data-testid="logout"]').click()
   cy.cadastrarUsuario(usuario, email2, '123456')
   cy.contains('Username já cadastrado')
   })
})