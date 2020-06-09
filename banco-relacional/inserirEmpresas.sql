ALTER TABLE empresas MODIFY cnpj VARCHAR(14)

INSERT INTO empresas (nome, cnpj)
VALUES
    ('Bradesco', 1234567891234),
    ('Vale', 7894561237894),
    ('Cielo', 4561237894561)

DESC empresas
DESC prefeitos

INSERT INTO empresas_unidades (empresa_id, cidade_id, sede)
VALUES
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1)