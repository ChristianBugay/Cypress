/// <reference types="cypress" />

import { login } from '../../support/commands-user.js';

describe('Funcionalidade login no sistema', () => {
    it('Realizar o login no sistema', () => {
        cy.loginBackend()
    }),
    it('Erro ao realizar login no sistema', () => {
        cy.errorLoginBackend()
    });
});