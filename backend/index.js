const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Banco de dados em memória para armazenar os livros
let livros = [];

// Rota GET para obter todos os livros
app.get('/livros', (req, res) => {
  res.json(livros);
});

// Rota GET para obter um livro específico por ID
app.get('/livros/:id', (req, res) => {
  const { id } = req.params;
  const livro = livros.find(l => l.id === id);
  
  if (!livro) {
    return res.status(404).json({ error: 'Livro não encontrado' });
  }
  
  res.json(livro);
});

// Rota POST para criar um novo livro
app.post('/livros', (req, res) => {
  const { titulo, numeroPaginas, isbn, editora } = req.body;
  
  // Validação básica
  if (!titulo || !numeroPaginas || !isbn || !editora) {
    return res.status(400).json({ 
      error: 'Todos os campos são obrigatórios: titulo, numeroPaginas, isbn, editora' 
    });
  }
  
  const novoLivro = {
    id: uuidv4(),
    titulo,
    numeroPaginas: parseInt(numeroPaginas),
    isbn,
    editora
  };
  
  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

// Rota PUT para atualizar um livro existente
app.put('/livros/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, numeroPaginas, isbn, editora } = req.body;
  
  const livroIndex = livros.findIndex(l => l.id === id);
  
  if (livroIndex === -1) {
    return res.status(404).json({ error: 'Livro não encontrado' });
  }
  
  // Atualizar apenas os campos fornecidos
  if (titulo !== undefined) livros[livroIndex].titulo = titulo;
  if (numeroPaginas !== undefined) livros[livroIndex].numeroPaginas = parseInt(numeroPaginas);
  if (isbn !== undefined) livros[livroIndex].isbn = isbn;
  if (editora !== undefined) livros[livroIndex].editora = editora;
  
  res.json(livros[livroIndex]);
});

// Rota DELETE para deletar um livro
app.delete('/livros/:id', (req, res) => {
  const { id } = req.params;
  const livroIndex = livros.findIndex(l => l.id === id);
  
  if (livroIndex === -1) {
    return res.status(404).json({ error: 'Livro não encontrado' });
  }
  
  const livroRemovido = livros.splice(livroIndex, 1)[0];
  res.json({ message: 'Livro removido com sucesso', livro: livroRemovido });
});

// Inicializar servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

