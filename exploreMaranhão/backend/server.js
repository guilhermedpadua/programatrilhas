// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const routes = require('./routes');

// Middleware
app.use(cors());
app.use(express.json());

// Rota simples para teste
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

app.use('/api', routes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
