SELECT e.nome 'Estado', c.nome 'Cidade', regiao 'Região' FROM estados e, cidades c
WHERE e.id = c.estado_id

SELECT e.nome 'Estado', c.nome 'Cidade', regiao 'Região' FROM estados e
INNER JOIN  cidades c on e.id = c.estado_id