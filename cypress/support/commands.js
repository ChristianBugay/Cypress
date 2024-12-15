import {faker} from '@faker-js/faker'

export function generateUser() {
    let person = new Object();
    person.user = faker.person.firstName();
    person.email = faker.internet.email();
    person.password = faker.internet.password();
    return person;
}

export function generateProduct() {
    let product = new Object();
    product.name = faker.commerce.product() + faker.commerce.product();
    product.price = Math.floor(Math.random() * 1000) + 1;
    product.description = faker.lorem.paragraph();
    product.quantity = Math.floor(Math.random() * 100) + 1;
    return product;
}

Cypress.Commands.add('signIn', (person) => {
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').should('be.visible').type(person.user)
    cy.get('[data-testid="email"]').should('be.visible').type(person.email)
    cy.get('[data-testid="password"]').should('be.visible').type(person.password)
    cy.get('[data-testid="checkbox"]').click()
    cy.get('[data-testid="cadastrar"]').click({ force: true })
    //cy.get('[data-testid="cadastrar"]').click()
    cy.wait(500)
    cy.get('.alert-link').should('be.visible').should('contain', 'Cadastro realizado com sucesso')
    cy.contains('Bem Vindo ' + person.user)
})

Cypress.Commands.add('errorSignIn', () => {
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').should('be.visible').type(Cypress.env('USER_NAME'))
    cy.get('[data-testid="email"]').should('be.visible').type(Cypress.env('USER_EMAIL'))
    cy.get('[data-testid="password"]').should('be.visible').type(Cypress.env('USER_PASSWORD'))
    cy.get('[data-testid="cadastrar"]').click()
    cy.wait(500)
    cy.contains('Este email já está sendo usado').should('be.visible')
})

Cypress.Commands.add('login', (email, password, name) => {
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="senha"]').type(password)
    cy.get('[data-testid="entrar"]').should('be.visible').click()
    cy.contains('Entrar').click()
    cy.contains('Bem Vindo ' + name).should('be.visible')
})

Cypress.Commands.add('registerNewUser', (newUser) => {
    cy.wait(500)
    cy.contains('Cadastrar Usuários').click()
    cy.wait(500)
    cy.get('[data-testid="nome"]').should('be.visible').type(newUser.user)
    cy.get('[data-testid="email"]').should('be.visible').type(newUser.email)
    cy.get('[data-testid="password"]').should('be.visible').type(newUser.password)
    cy.get('[data-testid="cadastrarUsuario"]').click()
    cy.contains('Lista dos usuários', { timeout: 5000 }).should('be.visible')
    cy.contains(newUser.user).should('be.visible')
    cy.contains(newUser.email).should('be.visible')
    cy.contains(newUser.password).should('be.visible')
})

Cypress.Commands.add('errorRegisterNewUser', (newUser) => {
    cy.wait(500)
    cy.contains('Cadastrar Usuários').click()
    cy.wait(500)
    cy.get('[data-testid="nome"]').should('be.visible').type(newUser.user)
    cy.get('[data-testid="email"]').should('be.visible').type(Cypress.env('ERROR_EMAIL'))
    cy.get('[data-testid="password"]').should('be.visible').type(newUser.password)
    cy.get('[data-testid="cadastrarUsuario"]').click()
    cy.wait(500)
    cy.contains('Este email já está sendo usado').should('be.visible')
})

Cypress.Commands.add('newProduct', (product) => {
    cy.wait(500)
    cy.get('[data-testid="cadastrar-produtos"]').click()
    cy.wait(500)
    cy.get('[data-testid="nome"]').should('be.visible').type(product.name)
    cy.get('[data-testid="preco"]').should('be.visible').type(product.price)
    cy.get('[data-testid="descricao"]').should('be.visible').type(product.description)
    cy.get('[data-testid="quantity"]').should('be.visible').type(product.quantity)
    cy.get('[data-testid="imagem"]').selectFile('../Cypress/imagem.png', { force: true })
    cy.get('[data-testid="cadastarProdutos"]').click()
    cy.contains(product.name).should('be.visible')
    cy.contains(product.price).should('be.visible')
    cy.contains(product.description).should('be.visible')
    cy.contains(product.quantity).should('be.visible')
})

Cypress.Commands.add('errorProduct', (product) => {
    cy.wait(500)
    cy.get('[data-testid="cadastrar-produtos"]').click()
    cy.wait(500)
    cy.get('[data-testid="nome"]').should('be.visible').type(Cypress.env('ERROR_PRODUCT'))
    cy.get('[data-testid="preco"]').should('be.visible').type(product.price)
    cy.get('[data-testid="descricao"]').should('be.visible').type(product.description)
    cy.get('[data-testid="quantity"]').should('be.visible').type(product.quantity)
    cy.get('[data-testid="imagem"]').selectFile('../Cypress/imagem.png', { force: true })
    cy.get('[data-testid="cadastarProdutos"]').click()
    cy.wait(500)
    cy.contains('Já existe produto com esse nome').should('be.visible')
})