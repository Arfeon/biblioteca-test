import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BibliotecaServiceService } from '../services/biblioteca-service.service';
import { Biblioteca } from '../modelos/biblioteca.model';

@Component({
  selector: 'app-bibilioteca',
  templateUrl: './bibilioteca.component.html',
  styleUrls: ['./bibilioteca.component.css']
})
export class BibiliotecaComponent implements OnInit {

  bibliotecas:Biblioteca[];
  nuevaBiblioteca:Biblioteca= new Biblioteca();
  cols = [  //Array amb les columnes que volem mostrar a la taula, el camp Field correspont al camp del model que farem servir i el HEader al text que es mostrarà
    { field: 'biblioteca_id', header: 'Id' },  
    { field: 'nombre', header: 'Nombre' },  
    { field: 'direccion', header: 'Dirección' },  
  ];  
  constructor(private http:HttpClient,private bibliotecaService:BibliotecaServiceService) { }

  ngOnInit(): void {
    console.log("Initi bibliotecas");
    this.getAllBibliotecas();
  }

  getAllBibliotecas(){
    console.log("Som al component get all  bibliotecas");
    this.bibliotecaService.getBibliotecas().subscribe(data=>{
      this.bibliotecas=data;
      console.log(data);
    });
  }
  insertBiblioteca(){
    this.bibliotecaService.postBiblioteca(this.nuevaBiblioteca).subscribe(()=>this.getAllBibliotecas());
    this.nuevaBiblioteca.biblioteca_id=null;
    this.nuevaBiblioteca.nombre=null;
    this.nuevaBiblioteca.direccion=null;

  }

  eliminarBiblioteca(id:number){
    console.log("Eliminem amb id: " + id);
    this.bibliotecaService.deleteBiblioteca(id).subscribe(()=>this.getAllBibliotecas());
  }

}
