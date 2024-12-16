/// <reference types="cypress" />
import { generateUser } from '../../../support/commands.js';

describe('Funcionalidade de cadastro de usuario para ecommerce', () => {
  it('Cadastrar usuario para ecommerce com sucesso', () => {
    cy.visit(Cypress.env('URL'));
    cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'), Cypress.env('USER_NAME'))
    const newUser = generateUser()
    cy.registerNewUser(newUser)
  }),
  it('Erro ao cadastrar usuario para ecommerce', () => {
    cy.visit(Cypress.env('URL'));
    cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'), Cypress.env('USER_NAME'))
    const newUser = generateUser()
    cy.errorRegisterNewUser(newUser)
  });
});