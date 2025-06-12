/*
	CREATE TABLE
*/
	
	CREATE TABLE IF NOT EXISTS user_dtls(
	-- CREATE TABLE user_dtls(
		user_id SERIAL PRIMARY KEY,
		user_name VARCHAR(50) UNIQUE NOT NULL,
		first_name VARCHAR(50) NOT NULL, 
		last_name VARCHAR(50) NOT NULL,
		comments VARCHAR(255),
		created_at TIMESTAMP NOT NULL
	);
	
	SELECT * FROM user_dtls;
	
	
	SELECT * FROM film;
	-- SELECT * FROM dvd_rental.film; -- soliution for MySQL
	
	CREATE TABLE IF NOT EXISTS my_film AS (SELECT * FROM film);
	-- CREATE TABLE IF NOT EXISTS demo_db.my_film AS (SELECT * FROM dvd_rental.film); -- soliution MySQL copy table data between different data bases.
	
	SELECT * FROM my_film;
	
	
	-- COPY film TO 'C:\00_bt\bt-js-testing-20250129\projects\09_sql_scripts\film.csv' WITH CSV HEADER;
	
	
	CREATE TEMPORARY TABLE IF NOT EXISTS my_film_tmp AS (SELECT * FROM film);
	SELECT * FROM my_film_tmp;


/*
	INSERT INTO
*/

	SELECT MAX(film_id) FROM my_film_tmp;
	
	INSERT INTO my_film_tmp(film_id, title)
	VALUES 
		(1001, 'Some title 01'),
		(1002, 'Some title 01'),
		(null, 'Some title 01');
	
	INSERT INTO my_film_tmp(film_id, title)
	VALUES 
		((SELECT MAX(film_id) FROM my_film_tmp) +1 , 'Some title 01');
	
	INSERT INTO my_film_tmp(title)
	VALUES 
		('Some title 01');
	
		
	SELECT * FROM my_film_tmp WHERE film_id > 1000 OR film_id IS NULL;

/*
	UPDATE TABLE
*/

	SELECT * FROM my_film_tmp WHERE film_id > 1000 OR film_id IS NULL;
 
	ALTER TABLE  my_film_tmp
		ALTER COLUMN film_id TYPE bigint;

	ALTER TABLE  my_film_tmp
		RENAME COLUMN title TO new_title;

	SELECT * FROM my_film_tmp WHERE film_id IS NULL;



	DELETE FROM my_film_tmp
	WHERE film_id IS NULL;

-- check later
		ALTER TABLE  my_film_tmp
		ALTER COLUMN new_title DROP NOT NULL;
