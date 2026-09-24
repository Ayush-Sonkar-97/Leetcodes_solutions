

SELECT
    S.score, 
COUNT(S2.score) as 'rank'
FROM Scores S,
(
    SELECT DISTINCT score
    FROM Scores
) s2
WHERE S.score <= S2.Score
GROUP BY S.id
ORDER BY S.score DESC;

