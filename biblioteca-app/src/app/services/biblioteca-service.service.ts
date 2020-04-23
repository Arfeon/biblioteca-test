import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Biblioteca } from '../modelos/biblioteca.model';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaServiceService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  urlBiblioteca:string ="http://localhost:3000/api/"
  constructor(private http:HttpClient) { }

  getBibliotecas():Observable<Biblioteca[]>{
    console.log("servei get bibliotecas");
    return this.http.get<Biblioteca[]>(this.urlBiblioteca+'bibliotecas');
  }
  getBibliotecaById(id:number):Observable<Biblioteca>{
    return this.http.get<Biblioteca>(this.urlBiblioteca+"bibliotecas/"+id);
  }
  postBiblioteca(biblioteca:Biblioteca):Observable<Biblioteca>{
    return this.http.post<Biblioteca>(this.urlBiblioteca+'bibliotecas',biblioteca,this.httpOptions);
  }
  putBiblioteca(id:number,biblioteca:Biblioteca):Observable<Biblioteca>{
    console.log("Som alput Biblioteca");
    return this.http.put<Biblioteca>(this.urlBiblioteca+"bibliotecas/"+id,biblioteca,this.httpOptions);
  }
  deleteBiblioteca(id:number):Observable<Biblioteca>{
    console.log("Som al Eliminar Biblioteca amb id: " + id);
    return this.http.delete<Biblioteca>(this.urlBiblioteca+"bibliotecas/"+id);
  }
}
