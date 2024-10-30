const mysql = require('mysql2');

const conexao = mysql.createConnection({
  host: 'localhost',        
  user: 'root',      
  password: 'senha',    
  database: 'correios_rastreamento' 
});

// Tenta Conectar
conexao.connect((erro) => {
  if (erro) {
    console.log('Erro de Conexão:', erro);
  } else {
    console.log('Conexão bem-sucedida!');
  }
});

module.exports = conexao;