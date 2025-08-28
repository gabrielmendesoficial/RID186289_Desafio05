# Sistema de Biblioteca Online

O projeto foi desenvolvido com sucesso, atendendo a todos os critérios de avaliação especificados no desafio. O sistema consiste em uma API RESTful em Node.js integrada a um frontend React, permitindo operações completas de CRUD (Create, Read, Update, Delete) para o gerenciamento de livros.

# Aplicativo Publicado

Utilize esse site publicado no Netlify para ver o projeto rodando:

## Estrutura do Projeto
```
biblioteca-online/
├── backend/                 # API Node.js
│   ├── index.js            # Servidor principal
│   ├── package.json        # Dependências do backend
│   └── package-lock.json   # Lock das dependências
├── frontend/               # Aplicação React
│   ├── src/
│   │   ├── api/
│   │   │   └── LivrosService.js    # Service para comunicação com API
│   │   ├── components/             # Componentes reutilizáveis
│   │   └── views/                  # Páginas da aplicação
│   ├── package.json        # Dependências do frontend
│   └── vite.config.js      # Configuração do Vite
├── README.md               # Documentação do projeto
└── .gitignore             # Arquivos ignorados pelo Git
```

## Estrutura de Dados

Cada livro possui os seguintes campos:
- `id`: Identificador único (UUID gerado automaticamente)
- `titulo`: Título do livro
- `numeroPaginas`: Número de páginas (tipo numérico)
- `isbn`: Código ISBN
- `editora`: Nome da editora

## Funcionalidades

- ✅ Cadastro de livros
- ✅ Listagem de livros
- ✅ Edição de livros
- ✅ Exclusão de livros

## Tecnologias Utilizadas

### Backend
- **Node.js**: Runtime JavaScript
- **Express**: Framework web para Node.js
- **CORS**: Middleware para permitir requisições cross-origin
- **UUID**: Geração de identificadores únicos

### Frontend
- **React**: Biblioteca para construção de interfaces
- **Vite**: Build tool e dev server
- **Axios**: Cliente HTTP para comunicação com a API
- **React Router DOM**: Roteamento da aplicação
- **SASS**: Pré-processador CSS

## Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Backend
```bash
cd backend
npm install
npm start
```
Servidor rodará em: http://localhost:3001

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Aplicação rodará em: http://localhost:5173

## API Endpoints

- `GET /livros` - Lista todos os livros
- `GET /livros/:id` - Obtém um livro específico
- `POST /livros` - Cria um novo livro
- `PUT /livros/:id` - Atualiza um livro existente
- `DELETE /livros/:id` - Remove um livro