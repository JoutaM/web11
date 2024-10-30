const db = require('./conexao');

db.query('SELECT 1 + 1 AS solution', (erro, resultados) => {
  if (erro) {
    console.error('Erro ao executar a consulta:', erro);
  } else {
    console.log('Resultado da consulta:', resultados[0].solution); // Deve mostrar 2
  }
});