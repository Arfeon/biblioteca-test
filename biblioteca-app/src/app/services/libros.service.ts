import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../modelos/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  urlLibros:string ="http://localhost:3000/api/";
  
  constructor(private http:HttpClient) { }

  getAllLibros():Observable<Libro[]>{
    return this.http.get<Libro[]>(this.urlLibros+"libros");
  }
}
