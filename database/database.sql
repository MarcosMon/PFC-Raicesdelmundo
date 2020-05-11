CREATE DATABASE museums_db;

USE museums_db;

CREATE TABLE museums(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180),
    description VARCHAR(255),
    price DECIMAL(2),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE museums;