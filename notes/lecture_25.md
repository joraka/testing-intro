1. Repeat and check homework
2. SQL scripts


## 1. Repeat and check homework


## 2. SQL scripts 

Postgres SQL functions:  
https://www.postgresql.org/docs/current/functions.html  

```SQL
/*
	Agregation functions
	count(), min(), max(), sum(), avg()
*/	

	SELECT 
		rating, 
		count(*), 
		min(replacement_cost),
		max(replacement_cost),
		max(replacement_cost) - min(replacement_cost) AS "diference",
		rental_duration 
	FROM film 
	-- GROUP BY rating, rental_duration 
	-- GROUP BY 1,2 
	GROUP BY 1,6 
	ORDER BY rating DESC, rental_duration DESC;
	
/*
	HAVING
*/
	SELECT 
		rating, 
		count(*) AS total_count, 
		min(replacement_cost),
		max(replacement_cost),
		max(replacement_cost) - min(replacement_cost) AS "diference",
		rental_duration 
	FROM film 
	WHERE title LIKE 'A%'
	-- GROUP BY rating, rental_duration 
	-- GROUP BY 1,2 
	GROUP BY 1, 6 
	HAVING rating IN ('NC-17', 'G') AND count(*) >= 3
	-- HAVING total_count >= 3 -- veikia tik prie MySQL dialekto
	ORDER BY rating DESC, rental_duration DESC;
```
