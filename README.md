# FrontCrudUser

Está é uma aplicação frontend desenvolvida em Vue, é uma aplicação de gerenciamento de pessoas.

## Tecnologias utilizadas

- Vue3 com TypeScript
- Bootstrap
- Axios
- Gsap
- Pinia
- Moment
- Vue3-toastify
- Vuelidate

## Instalação

Como pré-requisto é necessário ter o Node.js instalado e ter a url da api no .env. Você pode utilizar está url padrão

```sh
VITE_BASE_API_URL=http://localhost:8080
```  

### Etapas

#### 1- Instale as dependências rodando o comando:

```sh
npm install
```

#### 2- Inicie o front-end

```sh
npm run dev
```

#### 3- Acesse a aplicação

Para acessar a aplicação o link é http://localhost:5173

## Testes

Para o teste foi utilizado a tecnologia Cypress.

#### Inicie o teste

Para inicia-lo é necessário rodar o comando:

```sh
npm run test:e2e:dev
```

Após inicia-lo clique no botão

- Start E2E Testing in Chrome

Em seguida clique no arquivo *crudBasic.cy.ts* e os testes irão iniciar
