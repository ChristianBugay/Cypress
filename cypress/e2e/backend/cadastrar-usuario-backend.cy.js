/// <reference types="cypress" />
import { generateUser } from '../../support/commands.js';
import { registerNewUser } from '../../support/commands-user.js';

describe('Funcionalidade de cadastro de usuario', () => {
    const person = generateUser()
    it('Cadastrar usuario com sucesso', () => {
        cy.registerNewUser(person)
    });
    it('Validar email de usuario ja cadastrado', () => {
        cy.validateEmailUser(person)
    });
});