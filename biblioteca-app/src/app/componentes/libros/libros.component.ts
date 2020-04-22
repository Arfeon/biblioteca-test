import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LibrosService } from 'src/app/services/libros.service';
import { Libro } from 'src/app/modelos/libro.model';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros:Libro[];
  cols = [  //Array amb les columnes que volem mostrar a la taula, el camp Field correspont al camp del model que farem servir i el HEader al text que es mostrarà
    { field: 'libro_id', header: 'Id' },  
    { field: 'nombre', header: 'Nombre' },  
    { field: 'categoria_nombre', header: 'Categoria' },  
    { field: 'biblioteca', header:'Bibilioteca'}
  ];  
  constructor(private http:HttpClient,private libroService:LibrosService) { }

  ngOnInit(): void {
    this.getAllLibros();
  }

  getAllLibros(){
    this.libroService.getAllLibros().subscribe(data=>{
      this.libros=data;
      console.log(data);
    });
  }
}
