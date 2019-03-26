DROP DATABASE if EXISTS burgers_db;
Create DATABASE burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50)NOT NULL,
    devoured boolean DEFAULT false,
    date TIMESTAMP, 
    PRIMARY KEY (id)
);