/// <reference types="cypress" />

import { generateUser } from '../../support/login-commands.js';

describe('cadastrar novo usuario', () => {
    
    it('cadastrar usuario com sucesso', () => {
        const person = generateUser()
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: {
                "nome": person.user,
                "email": person.email,
                "password": person.password,
                "administrador": "true"
            }
        })
    });
});