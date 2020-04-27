export class Libro {
    libro_id:number;
    nombre:string;
    categoria_id?:number;
    biblioteca_id?:number;
    categoria_nombre:string;
    biblioteca:string;
    fecha_devolucion?:Date;
}
