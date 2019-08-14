DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers(
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(20) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE, 
    PRIMARY KEY (id)

);
INSERT INTO burgers(burger_name, devoured)
VALUES("hamburger", FALSE),
	("Bison Burger", FALSE),
	("Cheese Burger", FALSE);
    
-- SELECT * FROM burgers;

