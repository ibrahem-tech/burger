CREATE DATABASE burgerorders_db;

USE burgerorders_db;

CREATE TABLE burgers(
id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(200),
devoured BOOLEAN DEFAULT FALSE,
PRIMARY KEY (id)
);