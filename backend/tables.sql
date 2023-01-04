-- Active: 1662659335013@@35.226.146.116@3306@freire-aline-chagas
CREATE TABLE IF NOT EXISTS CLIENTS(
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
DROP TABLE CLIENTS; 

CREATE TABLE IF NOT EXISTS PRODUCTS(
id VARCHAR (255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
price DECIMAL(19,4) NOT NULL,
brand VARCHAR (11) NOT NULL,
product_tax VARCHAR (255) NOT NULL,
quantity TINYINT,
product_image VARCHAR (255) NOT NULL
);

CREATE TABLE IF NOT EXISTS PRODUCTS_ESPECIFICATIONS(
name VARCHAR (255) PRIMARY KEY,
description VARCHAR (255) NOT NULL,
value DECIMAL (19,2) NOT NULL
)

CREATE TABLE IF NOT EXISTS ORDERS(
order_id VARCHAR (255) PRIMARY KEY,
client_id VARCHAR (255) NOT NULL, 
products VARCHAR (255) NOT NULL,
quantity_item TINYINT,
product_total TINYINT,
value DECIMAL (19,2) NOT NULL,
order_date DATETIME,
order_total VARCHAR (255) NOT NULL
)

