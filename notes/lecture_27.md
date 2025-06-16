1. Repeat and check homework
2. SQL scripts


## 1. Repeat and check homework


## 2. SQL scripts 

Data types:  
https://www.postgresql.org/docs/current/datatype-numeric.html  
https://www.postgresql.org/docs/current/datatype.html  
https://neon.tech/postgresql/postgresql-tutorial/postgresql-data-types  

#### MODIFY TABLE
ALTER TABLE:  
    https://www.postgresql.org/docs/8.0/sql-altertable.html  
    https://neon.tech/postgresql/postgresql-tutorial/postgresql-alter-table  

DROP TABLE:  
    https://www.postgresql.org/docs/current/sql-droptable.html  

#### MODIFY DATA
INSERT:  
    https://neon.com/postgresql/postgresql-tutorial/postgresql-insert
    https://www.postgresql.org/docs/current/sql-insert.html  

UPDATE:  
    https://www.postgresql.org/docs/current/sql-update.html  
    https://neon.com/postgresql/postgresql-tutorial/postgresql-update  

DELETE:  
    https://www.postgresql.org/docs/8.1/sql-delete.html  
    https://neon.tech/postgresql/postgresql-tutorial/postgresql-default-value  

### sql code examples

Solution copy table data between different databases would be to use CSV files
```SQL
--  require film.csv file in directory
-- run from dvd_rental data base
COPY film TO 'C:\00_bt\bt-js-testing-20250129\projects\09_sql_scripts\film.csv' WITH CSV HEADER;


-- create table in demo_db database
CREATE TABLE my_film (
    film_id INTEGER,
    title TEXT,
    description TEXT,
    release_year INTEGER,
    language_id INTEGER,
    rental_duration INTEGER,
    rental_rate NUMERIC,
    length INTEGER,
    replacement_cost NUMERIC,
    rating TEXT,
    last_update TIMESTAMP,
    special_features TEXT,
    fulltext TSVECTOR
);

-- run from demo_db data base
COPY my_film FROM 'C:\00_bt\bt-js-testing-20250129\projects\09_sql_scripts\film.csv' WITH CSV HEADER;
```



