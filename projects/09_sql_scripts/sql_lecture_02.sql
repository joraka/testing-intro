/*
	Distinct
*/

	SELECT first_name FROM actor;
	SELECT count(*) FROM actor;
	
	SELECT DISTINCT first_name FROM actor;
	SELECT count(DISTINCT first_name) FROM actor;

	SELECT DISTINCT first_name, last_name FROM actor ORDER BY 1;
	
	SELECT first_name, last_name, count(*) FROM actor GROUP BY 1, 2 HAVING count(*) > 1;

/*
	array
	IS NULL, IS NOT NULL
*/

	SELECT film_id, title, special_features FROM film;
	SELECT film_id, title, special_features[1], special_features[4] FROM film ORDER BY 4;
	
	-- SELECT film_id, title, special_features FROM film 
	SELECT DISTINCT special_features FROM film 
	-- WHERE special_features[1] = 'Commentaries'
	WHERE special_features[1] LIKE 'C%'
	ORDER BY 1;

	SELECT title, special_features FROM film 
	-- WHERE special_features[4] LIKE 'B%'
	-- WHERE special_features[4] NOT LIKE 'B%'
	WHERE special_features[3] IS NULL;
	
	SELECT title, special_features FROM film 
	WHERE 'Behind the Scenes' = ANY(special_features);
	-- WHERE special_features[1] = 'Behind the Scenes';

/*
	MySQL date_formatter()
	PostgreSQL to_char()
*/

	SELECT * FROM rental;

	SELECT rental_id, rental_date, date_part('day', rental_date), date_part('year', rental_date) FROM rental;
	SELECT rental_id, rental_date FROM rental WHERE date_part('year', rental_date) = 2005;
	SELECT rental_id, rental_date FROM rental WHERE date_part('year', rental_date) = 2005 AND date_part('month', rental_date) = 6;

	
	SELECT rental_id, rental_date FROM rental WHERE to_char(rental_date, 'YYYY') = '2006';
	SELECT rental_id, rental_date FROM rental WHERE to_char(rental_date, 'MM') = '06';
	SELECT rental_id, rental_date FROM rental WHERE to_char(rental_date, 'YYYY-MM') = '2005-05';
	
	SELECT rental_id, rental_date, to_char(rental_date, 'HH -> HH24') FROM rental WHERE to_char(rental_date, 'YYYY MM HH24') = '2005 05 23';

	SELECT rental_id, rental_date FROM rental 
	WHERE CAST(to_char(rental_date, 'YYYY') AS INTEGER) = 2006;

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
	

	
	