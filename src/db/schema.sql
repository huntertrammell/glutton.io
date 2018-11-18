CREATE DATABASE glutton_db;

USE glutton_db;

CREATE TABLE food(
    id INT PRIMARY KEY AUTO_INCREMENT,
    food_name VARCHAR(50) NOT NULL,
    eaten BOOLEAN DEFAULT false
)

