import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LibrosService } from 'src/app/services/libros.service';
import { Libro } from 'src/app/modelos/libro.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros:Libro[];
  nuevoLibro:Libro=new Libro();
  modificando:boolean=false;
  cols = [  //Array amb les columnes que volem mostrar a la taula, el camp Field correspont al camp del model que farem servir i el HEader al text que es mostrarà
    { field: 'libro_id', header: 'Id' },  
    { field: 'nombre', header: 'Nombre' },  
    { field: 'categoria_nombre', header: 'Categoria' },  
    { field: 'biblioteca', header:'Bibilioteca'}
  ];  
  
  constructor(private http:HttpClient,private libroService:LibrosService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getAllLibros();
  }

  getAllLibros(){
    this.libroService.getAllLibros().subscribe(data=>{
      this.libros=data;
      console.log(data);
    });
  }
  getLibroById(id:number){
    this.libroService.getLibroById(id).subscribe(data=>{
      this.nuevoLibro=data[0];
      console.log(this.nuevoLibro);
      this.modificando=true;
    });
  }
  insertLibro(){
    this.libroService.postLibro(this.nuevoLibro).subscribe(()=>this.getAllLibros());
  }
  modificarLibro(id:number){
    console.log("ID del Libro: " + id);
    this.libroService.putLibro(id,this.nuevoLibro).subscribe(()=>this.getAllLibros());
  }
  eliminarLibro(id:number){
    this.libroService.deleteLibro(id).subscribe(()=>this.getAllLibros());
      
  }

}
