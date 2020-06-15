CREATE DATABASE museums_db;
USE museums_db;
CREATE TABLE museums(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT(11),
    name VARCHAR(180),
    price DECIMAL(3),
    description VARCHAR(2000),
    phone VARCHAR(255),
    email VARCHAR(255),
    website VARCHAR(180),
    openinghours VARCHAR(180),
    city VARCHAR(180),
    ticket_purchase_page VARCHAR(180),
    country VARCHAR(180),
    direction VARCHAR(180),
    postalcode VARCHAR(180),
    colection_period VARCHAR(180),
    image VARCHAR(1000),
    ubication VARCHAR(2000),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE museums;

CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    user_role VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;
    
ALTER TABLE museums ADD FOREIGN KEY (user_id) 
  REFERENCES users(id);

DESCRIBE users;

CREATE TABLE comments(
    id INT(11) NOT NULL,
    id_user INT(11) NOT NULL,
    id_museum INT(11) NOT NULL,
	comment VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE comments
    ADD PRIMARY KEY (id);

ALTER TABLE comments
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;
    
ALTER TABLE comments ADD FOREIGN KEY (id_user) 
  REFERENCES users(id);
  
ALTER TABLE comments ADD FOREIGN KEY (id_museum) 
  REFERENCES museums(id);
  
  
DESCRIBE comments;
CREATE TABLE kpi(
    id INT(11) NOT NULL,
    id_museum INT(11) NOT NULL,
	webVisitClicks INT(11) NOT NULL,
    webTicketBuy INT (11) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE kpi
    ADD PRIMARY KEY (id);

ALTER TABLE kpi
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;
    
  
ALTER TABLE kpi ADD FOREIGN KEY (id_museum) 
  REFERENCES museums(id);
  
  
DESCRIBE kpi;

CREATE TABLE tickets(
    id INT(11) NOT NULL,
    id_user INT(11) NOT NULL,
    subject VARCHAR(255) NOT NULL,
	status VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
	comment VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE tickets
    ADD PRIMARY KEY (id);

ALTER TABLE tickets
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;
    
ALTER TABLE tickets ADD FOREIGN KEY (id_user) 
  REFERENCES users(id);
  
  
DESCRIBE tickets;
