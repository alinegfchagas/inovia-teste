-- Active: 1662659335013@@35.226.146.116@3306@freire-aline-chagas
CREATE TABLE IF NOT EXISTS Clients(
id VARCHAR (255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
adress VARCHAR (255) NOT NULL,
phone VARCHAR (11) NOT NULL,
email VARCHAR (255) NOT NULL,
birth_date DATE NOT NULL,
login VARCHAR (255) NOT NULL,
password VARCHAR (255) NOT NULL,
profile_pic VARCHAR (255) 
);

CREATE TABLE IF NOT EXISTS Products(
id VARCHAR (255) PRIMARY KEY,
product_name VARCHAR (255) NOT NULL,
price DECIMAL(19,4) NOT NULL,
brand VARCHAR (11) NOT NULL,
product_tax VARCHAR (255) NOT NULL,
quantity TINYINT,
product_image VARCHAR (255) NOT NULL, 
especification VARCHAR (255) NOT NULL

);

CREATE TABLE IF NOT EXISTS Products_Especifications(
especification_id VARCHAR (255) NOT NULL,
name VARCHAR (255) PRIMARY KEY,
description VARCHAR (255) NOT NULL,
value DECIMAL (19,2) NOT NULL,
FOREIGN KEY (especification_id) REFERENCES Products (especification)
);

CREATE TABLE IF NOT EXISTS Orders(
order_id VARCHAR (255) PRIMARY KEY,
client_id VARCHAR (255) NOT NULL, 
products VARCHAR (255) NOT NULL,
quantity_item TINYINT,
product_total TINYINT,
value DECIMAL (19,2) NOT NULL,
order_date DATETIME,
order_total VARCHAR (255) NOT NULL,
FOREIGN KEY (client_id) REFERENCES Clients (id)
)

