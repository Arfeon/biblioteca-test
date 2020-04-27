use INTERACTIU;

DROP TABLE IF EXISTS AlquilerUsuarioLibro;
DROP TABLE IF EXISTS Libros;
DROP TABLE IF EXISTS Usuarios;
DROP TABLE IF EXISTS Bibliotecas;
DROP TABLE IF EXISTS Categorias;


CREATE TABLE Bibliotecas (
    biblioteca_id int,
    nombre varchar(50),
    direccion varchar(100),
    CONSTRAINT Pk_biblioteca_id PRIMARY KEY (biblioteca_id)
);

CREATE TABLE Categorias(
    categoria_id int,
    nombre VARCHAR(50),
    CONSTRAINT Pk_categoria_id PRIMARY KEY (categoria_id)
);

CREATE TABLE Usuarios(
    usuario_id int,
    nombre varchar(15),
    apellidos varchar(50),
    CONSTRAINT Pk_usuario_id PRIMARY KEY (usuario_id)
);

CREATE TABLE Libros (
    libro_id int,
    nombre VARCHAR(25),
    biblioteca_id int,
    categoria_id int,
    CONSTRAINT Pk_libro_id PRIMARY KEY (libro_id),
    CONSTRAINT Fk_biblioteca_id FOREIGN KEY (biblioteca_id) REFERENCES Bibliotecas(biblioteca_id),
    CONSTRAINT Fk_categoria_id FOREIGN KEY (categoria_id) REFERENCES Categorias(categoria_id)
)

CREATE TABLE AlquilerUsuarioLibro (
    fecha_alquiler date,
    fecha_devolucion date,
    libro_id int,
    usuario_id int,
    CONSTRAINT Pk_libro_usuario PRIMARY KEY(fecha_alquiler,libro_id,usuario_id),
    CONSTRAINT Fk_libro_id FOREIGN KEY(libro_id) REFERENCES Libros(libro_id),
    CONSTRAINT fk_usuario_id FOREIGN KEY(usuario_id) REFERENCES Usuarios(usuario_id)
)