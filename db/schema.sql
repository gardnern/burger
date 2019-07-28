DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burger
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT FALSE,
	PRIMARY KEY (id)
);