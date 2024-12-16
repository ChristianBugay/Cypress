Cypress.Commands.add('registerNewUser', (person) => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: {
            "nome": person.user,
            "email": person.email,
            "password": person.password,
            "administrador": "true"
        }
    }).then((response)=>{
        expect(response.status).to.equal(201)
        expect(response.body.message).to.eql('Cadastro realizado com sucesso')
        expect(response.body._id).to.not.equal(null)
    })
})

Cypress.Commands.add('validateEmailUser', (person) => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: {
            "nome": person.user,
            "email": person.email,
            "password": person.password,
            "administrador": "true"
        },
        failOnStatusCode: false
    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.eql('Este email já está sendo usado')
    })
})

Cypress.Commands.add('loginBackend', () => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
            "email": Cypress.env('USER_EMAIL'),
            "password": Cypress.env('USER_PASSWORD')
        },
        failOnStatusCode: false
    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.message).to.eql('Login realizado com sucesso')
        expect(response.body.authorization).to.exist
        Cypress.env('authToken', response.body.authorization)
    })
})

Cypress.Commands.add('errorLoginBackend', () => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
            "email": Cypress.env('ERROR_EMAIL'),
            "password": Cypress.env('USER_PASSWORD')
        },
        failOnStatusCode: false
    }).then((response)=>{
        expect(response.status).to.equal(401)
        expect(response.body.message).to.eql('Email e/ou senha inválidos')
    })
})

Cypress.Commands.add('tokenError', (product) => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/produtos',
        headers: {
            "Authorization": Cypress.env('ERROR_TOKEN')
        },
        body: {
            "nome": product.name,
            "preco": product.price,
            "descricao": product.description,
            "quantidade": product.quantity
        },
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.equal(401);
        expect(response.body.message).to.eql('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais')
    });
})

Cypress.Commands.add('newProduct', (product) => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/produtos',
        headers: {
            "Authorization": Cypress.env('authToken')
        },
        body: {
            "nome": product.name,
            "preco": product.price,
            "descricao": product.description,
            "quantidade": product.quantity
        },
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body.message).to.eql('Cadastro realizado com sucesso')
        expect(response.body._id).to.exist
    });
})