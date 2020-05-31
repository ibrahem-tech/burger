DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id int AUTO_INCREMENT,
    name varchar(50),
    devoured boolean DEFAULT FALSE, 
    PRIMARY KEY (id)
);