1. Repeat and check homework
2. SQL scripts


## 1. Repeat and check homework


## 2. SQL scripts 

uzduotys 12


Postgres array types:  
https://www.postgresql.org/docs/current/arrays.html  
https://neon.com/postgresql/postgresql-tutorial/postgresql-array  

Postgres dates:  
https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-TRUNC  
https://www.postgresql.org/docs/current/datatype-datetime.html  


### Table join

1. One2One
2. One2Many, Many2One
3. Many2Many (linked table -> tarpine lentele)
	ex: film -> film_actor(film_id, actor_id) <- actor

```sql
/*
	JOIN
*/

	SELECT * FROM film; -- film_id
	SELECT * FROM film_category; -- film_id, category_id
	SELECT * FROM category; -- category_id

	SELECT 
		f.film_id,
		f.title,
		fc.category_id,
		c.name
	FROM film f
	JOIN film_category fc ON f.film_id = fc.film_id
	JOIN category c ON c.category_id = fc.category_id
	WHERE c.name = 'Documentary';
	
	SELECT * FROM film; 		-- language_id
	SELECT * FROM language; 	-- language_id

--  INNER JOIN
	SELECT 
		film_id,
		title,
		f.language_id,
		name
	FROM film f
	JOIN language l ON l.language_id = f.language_id
	-- WHERE l.name NOT IN ('English');


--  LEFT JOIN
	SELECT 
		film_id,
		title,
		f.language_id,
		name
	FROM language l
	-- LEFT JOIN film f ON l.language_id = f.language_id
	RIGHT JOIN film f ON l.language_id = f.language_id
	-- WHERE l.name NOT IN ('English');
```
