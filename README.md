# Plataforma A+ - Desafio FullStack

Aplicação CRUD com escopo para Escolas

## Banco de dados

Utilizei o bando de dados MySQL.
As seguintes tabelas fazem parte do BD:
* Diretores
* Escolas
* Professores
* Turmas
* Alunos

## Desafio

Desenvolvi o Back-End utilizando:
* Node.js
* Express
* Sequelize ORM
* Variáveis de ambiente

### Endpoints

Os seguintes endpoints estão implementados:
* GET `/escolas`
  * Responsável por retornar a lista de todas as escolas cadastradas.
```json
[
    {
        "id": 1,
        "nome": "Escola Fairydust Raymond",
        "diretor": {
            "id": 2,
            "nome": "Felix Sawyer"
        }
    },
    {
        "id": 2,
        "nome": "Escola Rachel Ball",
        "diretor": {
            "id": 1,
            "nome": "Judy Acevedo"
        }
    }
]
```
* POST `/addescola`
  * Responsável por criar uma nova escola no banco de dados.
```json
{
    "id": 3,
    "nome": "Escola Nova",
    "diretorId": 2
}
```
* PUT `/escola`
  * Responsável por editar os dados de uma escola que já esteja cadastrada no banco de dados.
```json
{
    "id": 3,
    "nome": "Escola Editada",
    "diretorId": 1
}
```
* DELETE `/escola`
  * Responsável por efetuar a exclusão de uma escola do cadastro do banco de dados.
```
Response Status: 204 No Content
```
---
* POST `/turmasescola`
  * Responsável por gerar uma lista de todas as turmas de uma determinada escola com seus respectivos professores e o nome da escola a qual a turma pertence.
```json
[
    {
        "id": 1,
        "nome": "5 Ano",
        "obs": null,
        "professor": {
            "id": 2,
            "nome": "prof Karan Hendricks"
        },
        "escola": {
            "id": 1,
            "nome": "Escola Fairydust Raymond"
        }
    },
    {
        "id": 2,
        "nome": "6 Ano",
        "obs": "Turma em semana de provas",
        "professor": {
            "id": 3,
            "nome": "prof Dave Seymour"
        },
        "escola": {
            "id": 1,
            "nome": "Escola Fairydust Raymond"
        }
    }
]
```
---
* POST `/alunosturma`
  * Responsável por gerar uma lista com todos os alunos que pertentem a uma determinada turma, detalhando o nome da turma e nome do professor.
```json
[
    {
        "id": 3,
        "nome": "Tobias Marsden",
        "turma": {
            "id": 2,
            "nome": "6 Ano",
            "professor": {
                "id": 3,
                "nome": "prof Dave Seymour"
            }
        }
    },
    {
        "id": 4,
        "nome": "Blaine Pearson",
        "turma": {
            "id": 2,
            "nome": "6 Ano",
            "professor": {
                "id": 3,
                "nome": "prof Dave Seymour"
            }
        }
    }
]
```
* POST `/alunoid`
  * Responsável por retornar os dados de determinado aluno buscando pelo ID.
```json
{
    "id": 1,
    "nome": "Khadeejah Mack",
    "responsavel": "Paisley Harding",
    "email": "paisley-harding@scholl.com",
    "celular": "3182906475",
    "obs": "O aluno já entregou todos os trabalhos",
    "turmaId": 3
}
```
* POST `/alunosterm`
  * Responsável por retornar uma lista de todos os alunos cujo termo propurado conste em algum dos campos de texto de seu cadastro.

Busca pelo termo "Todos"
```json
[
    {
        "id": 1,
        "nome": "Khadeejah Mack",
        "responsavel": "Paisley Harding",
        "email": "paisley-harding@scholl.com",
        "celular": "3182906475",
        "obs": "O aluno já entregou todos os trabalhos",
        "turmaId": 3
    }
]
```
Busca pelo termo "Davi"
```json
[
    {
        "id": 5,
        "nome": "Timur Davison",
        "responsavel": "Stewart Riddle",
        "email": "timur-davison@scholl.com",
        "celular": "7804695231",
        "obs": null,
        "turmaId": 1
    }
]
```
Busca pela letra "D"
```json
[
    {
        "id": 1,
        "nome": "Khadeejah Mack",
        "responsavel": "Paisley Harding",
        "email": "paisley-harding@scholl.com",
        "celular": "3182906475",
        "obs": "O aluno já entregou todos os trabalhos",
        "turmaId": 3
    },
    {
        "id": 2,
        "nome": "Eddie Huang",
        "responsavel": "Jorja Hood",
        "email": "jorja-hood@scholl.com",
        "celular": "2053879416",
        "obs": null,
        "turmaId": 3
    },
    {
        "id": 3,
        "nome": "Tobias Marsden",
        "responsavel": "Sheikh Webber",
        "email": "tobias-marsden@scholl.com",
        "celular": "9023168457",
        "obs": null,
        "turmaId": 2
    },
    {
        "id": 5,
        "nome": "Timur Davison",
        "responsavel": "Stewart Riddle",
        "email": "timur-davison@scholl.com",
        "celular": "7804695231",
        "obs": null,
        "turmaId": 1
    }
]
```

### Instruções

1. Clone o repositório em seu computador;
2. Entre no diretório `/fullstack-challenge-Fernando-antunes/back-end`;
3. Execute o comando `npm install`;
4. Edite o arquivo `.env`:
```
MYSQL_USER= usuário do banco de dados MySQL
MYSQL_PASSWORD= senha de acesso ao banco de dados MySQL
HOSTNAME= endereço de acesso ao banco de dados

PORT= porta em que o servidor back-end deverá rodar
```
5. Como estou utilizando o Sequelize ORM é necessário executar estes comandos para criar o Banco de dados, tabelas e as popular:
  * `npx sequelize db:create` - Para criar o banco de dados.
  * `npx sequelize db:migrate:all` - Para criar as tabelas.
  * `npx sequelize db:seed:all` - Para popular as tabelas com informações básicas.
5. No terminal, execute o comando `npm start`;
6. Agora que o servidor Back-End está no ar, utilize alguma ferramenta de requisições de API's como o Postman ou Insomnia para testar as rotas.

### Considerações finais

- No prazo estipulado foi possivel desenvolver a aplicação back-end de forma parcial, porém, com os principais end-points de consulta e o CRUD da tabela Escolas.
- Desenvolvi a aplicação usando as melhores práticas que conheço nesse momento com REST e SOLID.
- Me comprometo, caso seja dado mais tempo, a desenvolver a solução completa. Front + Back.
- Fico aberto para conversar sobre o código, receber feed-back e responder dúvidas que venham a surgir.

---

## Fernando Antunes Filho
### Full-Stack Developer
WhatsApp (15) 997748440
email fernando.antunes1@gmail.com</br>
[Linkedin](https://www.linkedin.com/in/fernandoantunesfilho/)</br>
[GitHub](https://github.com/FernandoAntunesFilho)