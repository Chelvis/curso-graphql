INSERT INTO prefeitos (nome, cidade_id)
VALUES ('Rodrigo Neves', 2), ('Raquel Lyra', 3), ('Zenaldo Coutinho', null);

INSERT INTO prefeitos (nome, cidade_id)
VALUES ('Rafael Greca', null);

-- Duplicata de cidade_id dá erro
INSERT INTO prefeitos (nome, cidade_id)
VALUES ('Rodrigo Pinheiro', 3);