DROP DATABASE IF EXISTS friend_finder_db;

CREATE DATABASE friend_finder_db;

USE friend_finder_db;

CREATE TABLE friends (
    id INT NOT NULL AUTO_INCREMENT,
    friend TEXT NOT NULL,
    PRIMARY KEY (id)
);