-- komentaras
-- CTRL + /
-- copy all line: SHIFT + ALT + arrow_down

/*
	komentaras
*/

/*
*	SELECT, FROM
*/
	SELECT 'sveikas', 'pasauli';
	SELECT 'hello', 'world';
	
	SELECT 'sveikas', 'pasauli', null
	UNION
	SELECT 'hello', 'world', 'antradienis'
	UNION
	SELECT 'bonjour', 'la monde', 'defaul value';
	
	
	SELECT * FROM actor;
	SELECT first_name AS "Vardas", last_name AS Pavarde FROM actor;
	SELECT first_name Vardas, last_name "Pavarde" FROM actor;
	
	SELECT first_name, LOWER(first_name) Vardas, UPPER(last_name) "Pavarde" FROM actor;

/*
	WHERE
*/

	SELECT * FROM country;
	SELECT * FROM country WHERE country = 'Lithuania';
	SELECT * FROM country WHERE country = 'United States' AND country = 'Lithuania';
	SELECT * FROM country WHERE country = 'United States' OR country = 'Lithuania';

	SELECT * FROM country WHERE country = 'Lithuania'
	UNION
	SELECT * FROM country WHERE country = 'United States';

	SELECT * FROM city WHERE city_id >= 600;
	SELECT * FROM city WHERE country_id = 56;
	SELECT * FROM city WHERE country_id = 103;
	
	SELECT * FROM city WHERE country_id = (SELECT country_id FROM country WHERE country = 'United States');

/*
	Logical operators
	>, <, >=, <=, =, <> or !=

	AND, OR
	&&, ||
*/

	SELECT country_id, city_id, city FROM city 
	-- WHERE country_id = 103 AND city_id >= 400 AND city_id <= 600 ORDER BY city_id DESC;
	-- WHERE country_id = 103 AND city_id >= 400 AND city_id <= 600 ORDER BY city_id ASC;
	-- WHERE country_id = 103 AND city_id >= 400 AND city_id <= 600 ORDER BY 3 DESC;
	WHERE country_id = 103 AND (city_id >= 400 OR city_id <= 600) ORDER BY 3 DESC;
	
/*
	BETWEEN AND
*/	
	SELECT country_id, city_id, city FROM city 
	WHERE country_id = 103 AND city_id >= 400 AND city_id <= 499 ORDER BY city_id DESC;

	SELECT country_id, city_id, city FROM city 
	WHERE country_id = 103 AND city_id BETWEEN 400 and 499 ORDER BY city_id DESC;

	SELECT country_id, city_id, city FROM city 
	WHERE country_id = 103 AND (city_id < 400 OR city_id > 499) ORDER BY city_id DESC;
	
	SELECT country_id, city_id, city FROM city 
	WHERE country_id = 103 AND city_id NOT BETWEEN 400 and 499 ORDER BY city_id DESC;

/*
	IN()
*/

	SELECT * FROM city WHERE country_id = 103;
	
	SELECT * FROM city WHERE country_id = 103 AND city_id IN (33, 42, 94, 435, 508, 999);
	SELECT * FROM city WHERE country_id = 103 AND city_id NOT IN (33, 42, 94, 435, 508, 999);

/*
	LIKE
*/

	SELECT * FROM city WHERE city > 'W';
	SELECT * FROM city WHERE city LIKE 'W%';
	SELECT * FROM city WHERE city LIKE 'Wro%';
	SELECT * FROM city WHERE city LIKE '%s';
	SELECT * FROM city WHERE city LIKE '% %';
	SELECT * FROM city WHERE city LIKE '% %' AND city NOT LIKE '% % %';

	SELECT * FROM city WHERE city LIKE '_a%';
	SELECT * FROM city WHERE city LIKE '%e__';

	SELECT * FROM city WHERE city LIKE '%A%';

	SELECT * 
	FROM city 
	WHERE  
		city ~ '^.*[^A]A[^A].*$' AND
		city NOT LIKE 'A%' AND city NOT LIKE 'a%' AND  
		city NOT LIKE '%A' AND city NOT LIKE '%a';

/*
	Agregation functions
	count(), min(), max(), sum(), avg()
*/	

	SELECT * FROM city;
	SELECT count(city_id), count(*) FROM city WHERE country_id = 103;
	SELECT count(city_id), count(*), min(city_id), max(city_id), sum(city_id), avg(city_id) FROM city WHERE country_id = 103;
	SELECT count(city_id), count(*), min(city_id), max(city_id), sum(city_id), avg(city_id) FROM city;

	SELECT * FROM film;
	SELECT rating, count(*) FROM film GROUP BY rating;
	SELECT rating, rental_duration, count(*) FROM film GROUP BY rating, rental_duration ORDER BY rating DESC, rental_duration DESC;
	
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


