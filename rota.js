const express = require('express');
const conexao = require('./conexao');

const app = express();
app.use(express.json());

// Rota para consultar o status de um pedido
app.get('/api/rastreamento/:numero', (req, res) => {
  const numero = req.params.numero;

  // Consulta SQL para buscar o pedido pelo número de rastreamento
  const sql = 'SELECT * FROM pedidos WHERE numero = ?';
  conexao.query(sql, [numero], (erro, resultado) => {
    if (erro) {
      console.log('Erro na consulta:', erro);
      res.status(500).json({ erro: 'Erro no servidor' });
    } else {
      if (resultado.length === 0) {
        res.status(404).json({ erro: 'Pedido não encontrado' });
      } else {
        const pedido = resultado[0];
        res.json({
          numero: pedido.numero,
          status: pedido.status,
          peso: pedido.peso,
          situacao: pedido.situacao
        });
      }
    }
  });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});