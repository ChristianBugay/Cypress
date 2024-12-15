/// <reference types="cypress" />
import { generateUser } from '../../../support/commands.js';


describe('Cadastrar usuario', () => {
  it('Cadastrar usuario informando dados validos', () => {
    cy.visit(Cypress.env('URL'));
    const person = generateUser()
    cy.signIn(person)
  });
});
