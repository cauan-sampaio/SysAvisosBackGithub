import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
let loginResponse;

Given('Que o usuário entre na página da API', () => {
  cy.visit('http://api.seci-h.maracanau.ifce.edu.br/swagger/index.html')
})

When('O usuário ira fazer a requisição de login com as credenciais de e-mail e senha', () => {
    cy.request({
      method: 'POST',
      url: '/administradores-auth',
      body:
      {
        "email": "admin@admin.com",
        "senha": "@Admin123"
      }
    }).then((response) => {
      loginResponse = response;
      expect(response.status).to.equal(200)
    })
})
Then('O usuário irá logar com sucesso', () => {
  if (loginResponse && loginResponse.status === 200) {
    cy.log('Logado com sucesso');
  } else {
    cy.log('Credenciais incorretas');
  }
    
})

Given('Que o usuário entre na página da API Erro e-mail e senha', () => {
  cy.visit('http://api.seci-h.maracanau.ifce.edu.br/swagger/index.html')
})

When('O usuário irá fazer a requisição de login sem as credenciais de e-mail e senha', () => {
  cy.request({
    method: 'POST',
    url: '/administradores-auth',
    body:
    {
      "email": "",
      "senha": ""
    },
    failOnStatusCode: false
  }).then((response) => {
    loginResponse = response;
    expect(response.status).to.equal(401)
    expect(response.body[0]).to.equal("Usuário e/ou senha incorretos")
  })
})

Then('O usuário não irá logar com sucesso', () => {
  if (loginResponse && loginResponse.status === 200) {
    cy.log('Logado com sucesso');
  } else {
    cy.log('Credenciais incorretas');
  }
    
})

Given('Que o usuário entre na página da API Erro senha', () => {
  cy.visit('http://api.seci-h.maracanau.ifce.edu.br/swagger/index.html')
})

When('O usuário irá fazer a requisição de login sem a credencial de senha', () => {
  cy.request({
    method: 'POST',
    url: '/administradores-auth',
    body:
    {
      "email": "admin@admin.com",
      "senha": ""
    },
    failOnStatusCode: false
  }).then((response) => {
    loginResponse = response;
    expect(response.status).to.equal(500)
    expect(response.body[0]).to.equal("Usuário e/ou senha incorretos")
   
    
  })
})

Then('O usuário não irá logar com sucesso 1', () => {
  if (loginResponse && loginResponse.status === 200) {
    cy.log('Logado com sucesso');
  } else {
    cy.log('Credenciais incorretas');
  }
    
})

Given('Que o usuário entre na página da API Erro e-mail', () => {
  cy.visit('http://api.seci-h.maracanau.ifce.edu.br/swagger/index.html')
})

When('O usuário irá fazer a requisição de login sem a credencial de e-mail', () => {
  cy.request({
    method: 'POST',
    url: '/administradores-auth',
    body:
    {
      "email": "",
      "senha": "@Admin123"
    },
    failOnStatusCode: false
  }).then((response) => {
    loginResponse = response;
    expect(response.status).to.equal(401)
    expect(response.body[0]).to.equal("Usuário e/ou senha incorretos")
 
  })
})

Then('O usuário não irá logar com sucesso 2', () => {
  if (loginResponse && loginResponse.status === 200) {
    cy.log('Logado com sucesso');
  } else {
    cy.log('Credenciais incorretas');
  }
    
})
