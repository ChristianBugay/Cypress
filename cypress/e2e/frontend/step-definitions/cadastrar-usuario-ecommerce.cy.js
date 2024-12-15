/// <reference types="cypress" />
import { generateUser } from '../../../support/commands.js';

describe('Cadastrar usuario para ecommerce', () => {
  it('Cadastrar usuario para ecommerce informando dados validos', () => {
    cy.visit(Cypress.env('URL'));
    cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'), Cypress.env('USER_NAME'))
    cy.wait(500)
    const newUser = generateUser()
    cy.registerNewUser(newUser)
  });
});
