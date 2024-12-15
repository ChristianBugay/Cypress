import {faker} from '@faker-js/faker'

export function generateUser() {
    let person = new Object();
    person.user = faker.person.firstName();
    person.email = faker.internet.email();
    person.password = faker.internet.password();
    return person;
}

Cypress.Commands.add('signIn', (person) => {
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').should('be.visible').type(person.user)
    cy.get('[data-testid="email"]').should('be.visible').type(person.email)
    cy.get('[data-testid="password"]').should('be.visible').type(person.password)
    cy.get('[data-testid="checkbox"]').click()
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.alert-link').should('be.visible').should('contain', 'Cadastro realizado com sucesso')
    cy.contains('Bem Vindo ' + person.user)
})

Cypress.Commands.add('login', (email, password, name) => {
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="senha"]').type(password)
    cy.get('[data-testid="entrar"]').should('be.visible').click()
    cy.contains('Entrar').click()
    cy.contains('Bem Vindo ' + name).should('be.visible')
})

Cypress.Commands.add('registerNewUser', (newUser) => {
    cy.contains('Cadastrar Usuários').click()
    cy.get('[data-testid="nome"]').should('be.visible').type(newUser.user)
    cy.get('[data-testid="email"]').should('be.visible').type(newUser.email)
    cy.get('[data-testid="password"]').should('be.visible').type(newUser.password)
    cy.get('[data-testid="cadastrarUsuario"]').click()
    cy.contains('Lista dos usuários', { timeout: 5000 }).should('be.visible')
    cy.contains(newUser.user).should('be.visible')
    cy.contains(newUser.email).should('be.visible')
    cy.contains(newUser.password).should('be.visible')
})