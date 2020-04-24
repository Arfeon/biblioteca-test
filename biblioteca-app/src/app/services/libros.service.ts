import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../modelos/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  urlLibros:string ="http://localhost:3000/api/libros/";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http:HttpClient) { }

  getAllLibros():Observable<Libro[]>{
    return this.http.get<Libro[]>(this.urlLibros);
  }
  getLibroById(id:number):Observable<Libro>{
    return this.http.get<Libro>(this.urlLibros+id);
  }
  postLibro(libro:Libro):Observable<Libro>{
    return this.http.post<Libro>(this.urlLibros,libro,this.httpOptions);
  }
  putLibro(id:number,libro:Libro):Observable<Libro>{
    return this.http.put<Libro>(this.urlLibros+id,libro,this.httpOptions);
  }
  deleteLibro(id:number):Observable<Libro>{
    return this.http.delete<Libro>(this.urlLibros+id);
  }
}
