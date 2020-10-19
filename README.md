# Projeto Biblioteca API Ploomes

Este projeto é de fim demostrativo e de teste para o processo seletivo da empresa Ploomes. 

O projeto consiste em realizar criação e listagem de livros de uma biblioteca, uma API que contém CRUD para tal entidade.

O Banco de dados está definido (temporariamente) com a *connection string* de um banco hospedado no Azure.


## API

### Rodando o projeto
```
dotnet run -p .\SimpleApiPloomes\
```

### Rotas
**Rotas** da API:
- **GET** List: `/api/books`
- **GET** Details: `/api/books/{id}`
- **POST** Create: `/api/books`
- **PUT** Put: `/api/books/{id}`
- **DELETE** Delete: `/api/books{id}`

## Client

Este *app* também possui uma aplicação *client*, baseado em *SPA* (*Single Page Application*) utilizando React, que possui funcionalidade de Criar e Listar os livros. 

### Instalando pacotes pelo npm
```
cd .\SimpleApiPloomes\ClientApp\
npm install
```

