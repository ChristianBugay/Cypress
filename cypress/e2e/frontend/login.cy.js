/// <reference types="cypress" />
describe('log in to the system', () => {
    it('displays login screen', () => {
      cy.visit('https://front.serverest.dev/login')
      cy.get('[data-testid="email"]').type('ceb@gmail.com')
      cy.get('[data-testid="senha"]').type('admin123')
      cy.get('[data-testid="entrar"]').click()
    })
})