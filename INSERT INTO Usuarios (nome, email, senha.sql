INSERT INTO Usuarios (nome, email, senha)
VALUES ('João Silva', 'joao@exemplo.com', 'senha123');
-- Inserir dados na tabela Pedidos
INSERT INTO Pedidos (usuario_id, data_pedido, status)
VALUES (1, '2024-11-01', 'Enviado');
-- Inserir dados na tabela Pacotes
INSERT INTO Pacote (peso, status_entrega)
VALUES (2.5, 'Preparando para envio');
-- Inserir dados na tabela Rastreamento
INSERT INTO Rastreamento (pacote_id, atualizacao_status, localizacao)
VALUES (1, 'Enviado', 'São Paulo');