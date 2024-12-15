/// <reference types="cypress" />
import { generateProduct } from '../../../support/commands.js';

describe('Funcionalidade de cadastro de produto', () => {
  const product = generateProduct()
  it('Cadastrar novo produto com sucesso', () => {
    cy.visit(Cypress.env('URL'));
    cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'), Cypress.env('USER_NAME'))
    cy.newProduct(product)
  }),
  it('Erro ao cadastrar novo produto', () => {
    cy.visit(Cypress.env('URL'));
    cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'), Cypress.env('USER_NAME'))
    cy.errorProduct(product)
  });
});
