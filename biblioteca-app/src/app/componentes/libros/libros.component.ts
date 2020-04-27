import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LibrosService } from 'src/app/services/libros.service';
import { Libro } from 'src/app/modelos/libro.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/modelos/categoria.model';
import { CategoriasService } from 'src/app/services/categorias.service';
import { JsonPipe } from '@angular/common';
import { Biblioteca } from 'src/app/modelos/biblioteca.model';
import { BibliotecaServiceService } from 'src/app/services/biblioteca-service.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros:Libro[];
  categoriaSeleccionada:Categoria= new Categoria();
  categorias:Categoria[]=[];
  bibliotecas:Biblioteca[]=[];
  bibliotecaSeleccionada:Biblioteca=new Biblioteca();
  //categoriasMap = new Map<number,string>();
  nuevoLibro:Libro=new Libro();
  modificando:boolean=false;
  cols = [  //Array amb les columnes que volem mostrar a la taula, el camp Field correspont al camp del model que farem servir i el HEader al text que es mostrarà
    { field: 'libro_id', header: 'Id' },  
    { field: 'nombre', header: 'Nombre' },  
    { field: 'categoria_nombre', header: 'Categoria' },  
    { field: 'biblioteca', header:'Bibilioteca'}
  ];  
  
  constructor(private http:HttpClient,private libroService:LibrosService,private route:ActivatedRoute,private router:Router,private categoriaService:CategoriasService,
    private bibliotecaService:BibliotecaServiceService) { }

  ngOnInit(): void {
    this.getAllLibros();
    this.getAllCategorias();
    this.getAllBibliotecas();
  }

  getAllCategorias(){
    this.categoriaService.getAllCategories().subscribe(data=>{
      this.categorias=data;
      /*data.forEach(result=>{
        this.categoriasMap.set(result.categoria_id,result.nombre);
      });
      this.categoriasMap.forEach((value,key)=>{
        this.categorias.push(key + "," + value);
      });
      console.log(this.categorias);
      console.log(this.categoriasMap);
      */
    });
  }
  getAllBibliotecas(){
    this.bibliotecaService.getBibliotecas().subscribe(data=>this.bibliotecas=data);
  }
  setBibliotecaSeleccionada(){
    console.log("biblioteca nova: " + this.nuevoLibro.biblioteca_id);
    this.bibliotecaService.getBibliotecaById(this.nuevoLibro.biblioteca_id).subscribe(data=>{
      this.bibliotecaSeleccionada=data[0];
      console.log("bibliotecaSeleccioanda: " + data);
    });
  }
  getAllLibros(){
    this.libroService.getAllLibros().subscribe(data=>{
      this.libros=data;
      //console.log(data);
      console.log(this.categoriaSeleccionada);
    });
    
  }
  getAllLibrosAlquileres(){
    this.libroService.getAllLibrosAlquileres().subscribe(data => this.libros=data);
  }
  getLibroById(id:number){
    this.libroService.getLibroById(id).subscribe(data=>{
      this.nuevoLibro=data[0];
      //console.log(this.nuevoLibro);
      this.setCategoriasSeleccionada();//Emplenem els objectes de biblioteca i categoria, amb les dades que corresponen del objecte seleccionat
      this.setBibliotecaSeleccionada();//Així la llista ens selecciona el element d emanera dinàmica, ja que es va assignant per cada vegada que van click al modificar
      //console.log(this.categoriaSeleccionada);
      this.modificando=true;
    });
  }
  setCategoriasSeleccionada(){
    this.categoriaService.getCategoriaById(this.nuevoLibro.categoria_id).subscribe(data=>{
      this.categoriaSeleccionada=data[0];
    });
  }
  insertLibro(){
    this.nuevoLibro.biblioteca_id=this.bibliotecaSeleccionada.biblioteca_id;
    this.nuevoLibro.categoria_id=this.categoriaSeleccionada.categoria_id;
    this.libroService.postLibro(this.nuevoLibro).subscribe(()=>this.getAllLibros());
  }
  modificarLibro(id:number){
    console.log("ID del Libro: " + id);
    this.nuevoLibro.categoria_id=this.categoriaSeleccionada.categoria_id;
    this.nuevoLibro.biblioteca_id=this.bibliotecaSeleccionada.biblioteca_id;
    this.libroService.putLibro(id,this.nuevoLibro).subscribe(()=>this.getAllLibros());
  }
  eliminarLibro(id:number){
    this.libroService.deleteLibro(id).subscribe(()=>this.getAllLibros());
      
  }
  limpiar(){
    this.nuevoLibro.libro_id=null;
    this.nuevoLibro.nombre=null;
    this.nuevoLibro.biblioteca_id=null;
    this.categoriaSeleccionada=null;
    this.bibliotecaSeleccionada=null;
    this.modificando=false;
  }

}
