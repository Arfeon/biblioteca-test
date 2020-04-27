USE INTERACTIU;
-- ENTRADA DE CATEGORIES

INSERT INTO Categorias(categoria_id,nombre) VALUES(1,'Historia');
INSERT INTO Categorias(categoria_id,nombre) VALUES(2,'Romantica');
INSERT INTO Categorias(categoria_id,nombre) VALUES(3,'Matematicas');

--select * from Categorias;
--ENTRADA DE BIBLIOTQUES
INSERT INTO Bibliotecas(biblioteca_id,nombre,direccion) VALUES(1,'Grand Central','Calle la prueba 25');
INSERT INTO Bibliotecas(biblioteca_id,nombre,direccion) VALUES(2,'La lectora','Calle de la lectura 47');

--select * from Bibliotecas;
--ENTRADA USUARIS

INSERT INTO Usuarios(usuario_id,nombre,apellidos) VALUES(333333,'Alfredo','Del Amor');
INSERT INTO Usuarios(usuario_id,nombre,apellidos) VALUES(888888,'Bernardo','Nardo Verde');
INSERT INTO Usuarios(usuario_id,nombre,apellidos) VALUES(111111,'Andrea','García');
INSERT INTO Usuarios(usuario_id,nombre,apellidos) VALUES(222222,'Vanessa','Reina Valera');

--select * from Usuarios;
--ENTRADA USUARIS

INSERT INTO Libros(libro_id,nombre,biblioteca_id,categoria_id) VALUES(0001,'Historia de Alemania', 1, 1);
INSERT INTO Libros(libro_id,nombre,biblioteca_id,categoria_id) VALUES(0002,'Historia de España', 1, 1);
INSERT INTO Libros(libro_id,nombre,biblioteca_id,categoria_id) VALUES(0003,'Historia de Russia', 2, 1);
INSERT INTO Libros(libro_id,nombre,biblioteca_id,categoria_id) VALUES(0004,'Historia de los Gatos', 2, 1);
INSERT INTO Libros(libro_id,nombre,biblioteca_id,categoria_id) VALUES(0005,'Un Amor en Guerra', 1, 2);
INSERT INTO Libros(libro_id,nombre,biblioteca_id,categoria_id) VALUES(0006,'Por Atras a todo gas', 1, 2);
INSERT INTO Libros(libro_id,nombre,biblioteca_id,categoria_id) VALUES(0007,'Adan y Eva', 2, 2);
INSERT INTO Libros(libro_id,nombre,biblioteca_id,categoria_id) VALUES(0008,'Romeo y Julieta', 2, 2);
INSERT INTO Libros(libro_id,nombre,biblioteca_id,categoria_id) VALUES(0009,'La Respuesta es Pi', 1, 3);
INSERT INTO Libros(libro_id,nombre,biblioteca_id,categoria_id) VALUES(0010,'Todo es Aureo', 2, 3);

--select * from Libros
---Entrda Lloguers

INSERT INTO AlquilerUsuarioLibro(fecha_alquiler,fecha_devolucion,libro_id,usuario_id) VALUES ('2019-02-02','2019-02-28',0001,333333);
INSERT INTO AlquilerUsuarioLibro(fecha_alquiler,fecha_devolucion,libro_id,usuario_id) VALUES ('2019-02-02','2019-03-02',0005,333333);
INSERT INTO AlquilerUsuarioLibro(fecha_alquiler,fecha_devolucion,libro_id,usuario_id) VALUES ('2017-09-27','2018-01-01',0002,111111);
INSERT INTO AlquilerUsuarioLibro(fecha_alquiler,fecha_devolucion,libro_id,usuario_id) VALUES ('2017-02-01','2017-03-03',0007,111111);
INSERT INTO AlquilerUsuarioLibro(fecha_alquiler,fecha_devolucion,libro_id,usuario_id) VALUES ('2020-04-15','2018-07-09',0004,222222);
INSERT INTO AlquilerUsuarioLibro(fecha_alquiler,fecha_devolucion,libro_id,usuario_id) VALUES ('2017-08-26','2017-09-28',0009,222222);
INSERT INTO AlquilerUsuarioLibro(fecha_alquiler,fecha_devolucion,libro_id,usuario_id) VALUES ('2017-11-27','2018-01-20',0010,222222);
INSERT INTO AlquilerUsuarioLibro(fecha_alquiler,fecha_devolucion,libro_id,usuario_id) VALUES ('2020-02-02','2020-03-02',0005,111111);
INSERT INTO AlquilerUsuarioLibro(fecha_alquiler,fecha_devolucion,libro_id,usuario_id) VALUES ('2019-03-17','2020-03-02',0005,222222);
--select * from AlquilerUsuarioLibro;
