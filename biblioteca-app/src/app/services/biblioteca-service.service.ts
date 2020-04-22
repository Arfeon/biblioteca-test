import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Biblioteca } from '../modelos/biblioteca.model';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaServiceService {

  urlBiblioteca:string ="http://localhost:3000/api/"
  constructor(private http:HttpClient) { }

  getBibliotecas():Observable<Biblioteca[]>{
    console.log("servei get bibliotecas");
    return this.http.get<Biblioteca[]>(this.urlBiblioteca+'bibliotecas');
  }
}
