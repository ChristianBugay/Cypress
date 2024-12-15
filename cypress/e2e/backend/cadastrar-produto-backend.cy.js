/// <reference types="cypress" />

import { generateProduct } from '../../support/commands.js';
import { loginBackend, tokenError } from '../../support/commands-user.js';

describe('Cadastrar novo produto', () => {
    it('Cadastrar novo produto com sucesso', () => {
        const product = generateProduct()
        cy.loginBackend()
        cy.newProduct(product, token)
    }),
    it('Erro de token ao tentar cadastrar produto', () => {
        const product = generateProduct()
        cy.tokenError(product)
    });
});