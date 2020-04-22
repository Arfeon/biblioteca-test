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

}
