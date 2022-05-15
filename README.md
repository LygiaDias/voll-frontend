# Voll-Frontend

Boas vindas ao repositóriodo Voll-Frontend! A aplicação consiste em uma plataforma de controle de produtos e suas respectivas moedas de bônus. As requisições são feitas através de um banco de dados hospedado online que pode ser acessado através desde link https://voll-back-store.herokuapp.com/.

### Deploy da aplicação: https://voll-frontend.netlify.app/


### Dados de acesso 

A aplicação tem dois dados para login registrados, um do administrador onde é possível criar novos produtos, e outro para usuários normais. Obs: Ao fazer o login, pode ser que demore alguns segundos para a aplicação conectar com o banco de dados online.

-  Login para administrador: 

```json
  {
    "email": "admin@admin.com",
    "password": "secret_admin"
  }
  ```
-  Login para usuário normal:


```json
  
  {
    "email": "user@user.com",
    "password": "secret_user"
  }
  ```

### Baixando no computador o projeto


1. Clone o repositório

- `git clone git@github.com:LygiaDias/voll-frontend.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd voll-frontend`

2. Instale as dependências 

- `npm install`

3. Inicie a aplicação

- `npm run serve`


### Testando a aplicação

- `npm run test:unit`


### Repositório do backend da aplicação

`git@github.com:LygiaDias/voll-solutions-backend.git`


Volte sempre!