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


	
	