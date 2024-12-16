/// <reference types="cypress" />
import { generateUser } from '../../../support/commands.js';

describe('Funcionalidade de cadastro de usuario de sistema', () => {
  it('Cadastrar usuario de sistema com sucesso', () => {
    cy.visit(Cypress.env('URL'))
    const person = generateUser()
    cy.signIn(person)
  }),
  it('Erro ao cadastrar usuario de sistema', () => {
    cy.visit(Cypress.env('URL'))
    cy.errorSignIn()
  });
});