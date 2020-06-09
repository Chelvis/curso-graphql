SELECT regiao as 'Região', sum(populacao) as Total
FROM estados
GROUP BY regiao
ORDER BY Total desc

SELECT avg(populacao) as 'Média'
FROM estados