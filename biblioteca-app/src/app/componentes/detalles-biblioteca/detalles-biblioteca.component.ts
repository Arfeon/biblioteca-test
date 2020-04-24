import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Biblioteca } from 'src/app/modelos/biblioteca.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BibliotecaServiceService } from 'src/app/services/biblioteca-service.service';


@Component({
  selector: 'app-detalles-biblioteca',
  templateUrl: './detalles-biblioteca.component.html',
  styleUrls: ['./detalles-biblioteca.component.css']
})
export class DetallesBibliotecaComponent implements OnInit {

  biblioteca:Biblioteca;

  constructor(private http:HttpClient,private route:ActivatedRoute, private bibliotecaServico:BibliotecaServiceService, private router:Router) { 
    this.biblioteca = new Biblioteca();

  }

  ngOnInit(): void {
    this.getBibliotecaById();
    console.log("Bibiloteca: " + this.biblioteca.biblioteca_id + " " + this.biblioteca.nombre);
  }

  getBibliotecaById(){
    this.route.params.subscribe(params=>{
      let id = params['id'];
      if(id){
        this.bibliotecaServico.getBibliotecaById(id).subscribe(data=>{
          this.biblioteca=data[0];
          console.log(data);
          console.log("Biblioteca:" + this.biblioteca.nombre);
        });
      }
    });
  }
  modificarBiblioteca(){
    console.log("modificando la biblioteca con los datos: " + this.biblioteca.biblioteca_id + " " + this.biblioteca.nombre + " " + this.biblioteca.direccion);
    this.route.params.subscribe(params=>{
      let id = params['id'];
      if(id){
        this.bibliotecaServico.putBiblioteca(id,this.biblioteca).subscribe(()=>this.router.navigate(['/bibliotecas']));
      }
    });
    
  }

}
