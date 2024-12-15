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