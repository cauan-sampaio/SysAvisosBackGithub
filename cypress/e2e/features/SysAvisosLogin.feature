Feature: SysAvisosLogin

    Scenario: Logar no SysAvisos
        Given Que o usuário entre na página da API
        When O usuário ira fazer a requisição de login com as credenciais de e-mail e senha
        Then O usuário irá logar com sucesso
    Scenario: Logar no SysAvisos sem credenciais 
        Given Que o usuário entre na página da API Erro e-mail e senha
        When O usuário irá fazer a requisição de login sem as credenciais de e-mail e senha
        Then O usuário não irá logar com sucesso

    Scenario: Logar no SysAvisos sem senha
        Given Que o usuário entre na página da API Erro senha
        When O usuário irá fazer a requisição de login sem a credencial de senha
        Then O usuário não irá logar com sucesso 1
    
    Scenario: Logar no SysAvisos sem e-mail
        Given Que o usuário entre na página da API Erro e-mail
        When O usuário irá fazer a requisição de login sem a credencial de e-mail
        Then O usuário não irá logar com sucesso 2



