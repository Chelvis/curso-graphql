SELECT * FROM estados;

SELECT sigla, nome as 'Nome do Estado'
FROM estados
WHERE regiao = 'SUL';

SELECT nome as 'Nome do Estado', regiao as 'Região', populacao as 'População'
FROM estados
WHERE populacao >= 10
ORDER BY populacao DESC