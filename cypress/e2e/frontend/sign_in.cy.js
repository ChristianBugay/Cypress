/// <reference types="cypress" />
describe('log in to the system', () => {
    it('displays login screen', () => {
      cy.visit('https://front.serverest.dev/login')
      cy.get('[data-testid="cadastrar"]').click()
      cy.get('[data-testid="nome"]').type('Christian_w')
      cy.get('[data-testid="email"]').type('ceb2@gmail.com')
      cy.get('[data-testid="password"]').type('admin123')
      cy.get('[data-testid="checkbox"]').click()
      cy.get('[data-testid="cadastrar"]').click()
      cy.get('.alert-link').should('contain', 'Cadastro realizado com sucesso')
      cy.get('.alert-link').should('contain', 'Bem Vindo Christian_w')
    })
})