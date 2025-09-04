# Sistema de Biblioteca Online

O sistema consiste em uma API RESTful em Node.js integrada a um frontend React, permitindo operações completas de CRUD (Create, Read, Update, Delete) para o gerenciamento de livros.

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

## Inicialização rápida

Para quem usa **Windows**, existe um script auxiliar chamado `start-projetos.bat` na raiz do repositório.  
Ele inicia **backend** e **frontend** automaticamente em janelas separadas, dando mais agilizade para quem apenas quer o projeto rodando local.

No script existe o seguintes comandos:
```bash
@echo off
echo ====== Iniciando Backend ======
start cmd /k "cd backend && npm install && npm start"

echo ====== Iniciando Frontend ======
start cmd /k "cd frontend && npm install && npm run dev"

echo ================================
echo Projetos iniciados!
echo Backend rodando em: http://localhost:3001
echo Frontend rodando em: http://localhost:5173
pause
```

> É a forma mais rápida de subir o projeto para desenvolvimento.

Caso queira rodar apenas um modulo do sistema utilize os comandos:

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
