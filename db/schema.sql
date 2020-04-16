### Schema for the databse 

DROP DATABASE IF EXISTS `deutsch_db`;
CREATE DATABASE deutsch_db;
USE deutsch_db;

CREATE TABLE nouns
(
	id int NOT NULL AUTO_INCREMENT,
	gender varchar(255) NOT NULL,
	singularnoun varchar(255) NOT NULL,
	pluralnoun varchar(255) NOT NULL,
	englishdefinition varchar(255) NOT NULL,
	person BOOLEAN DEFAULT false,
	animal BOOLEAN DEFAULT false,
	thing BOOLEAN DEFAULT false,
	place BOOLEAN DEFAULT false,
	abstract BOOLEAN DEFAULT false,
	athome BOOLEAN DEFAULT false,
	atwork BOOLEAN DEFAULT false,
	dining BOOLEAN DEFAULT false,
	hotel BOOLEAN DEFAULT false,
	travel BOOLEAN DEFAULT false,
	people BOOLEAN DEFAULT false,
	events BOOLEAN DEFAULT false,
	shopping BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);