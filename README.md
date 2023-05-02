# express-mysql

Antes de comenzar crear la siguiente base de datos mediante las siguientes querys en localhost:  

CREATE DATABASE myshopdb  

CREATE TABLE productos (  
  id INT NOT NULL AUTO_INCREMENT,  
  nombre VARCHAR(50) NOT NULL,  
  precio DECIMAL(10,2) NOT NULL,  
  PRIMARY KEY (id)  
);  
CREATE TABLE categorias (  
  id INT NOT NULL AUTO_INCREMENT,  
  nombre VARCHAR(50) NOT NULL,  
  PRIMARY KEY (id)  
);  
CREATE TABLE categorias_productos (  
  id_categorias INT NOT NULL,  
  id_productos INT NOT NULL,  
  PRIMARY KEY (id_categorias, id_productos),  
  FOREIGN KEY (id_categorias) REFERENCES categorias(id),  
  FOREIGN KEY (id_productos) REFERENCES productos(id) ON DELETE CASCADE; 
);  

