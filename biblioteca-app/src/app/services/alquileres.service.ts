import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlquilerUsuarioLibro } from '../modelos/alquiler-usuario-libro.model';

@Injectable({
  providedIn: 'root'
})
export class AlquileresService {
  urlAlquileres:string="http://localhost:3000/api/alquileres/";
  httpOptions={
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http:HttpClient) { }

  getAllAlquileres():Observable<AlquilerUsuarioLibro[]>{
    return this.http.get<AlquilerUsuarioLibro[]>(this.urlAlquileres);
  }
  getAlquilerById(id:number):Observable<AlquilerUsuarioLibro>{
    return this.http.get<AlquilerUsuarioLibro>(this.urlAlquileres+id);
  }
  postAlquiler(alquilerUsuarioLibro:AlquilerUsuarioLibro):Observable<AlquilerUsuarioLibro>{
    return this.http.post<AlquilerUsuarioLibro>(this.urlAlquileres,alquilerUsuarioLibro,this.httpOptions);
  }
  putAlquiler(id:number,alquilerUsuarioLibro:AlquilerUsuarioLibro):Observable<AlquilerUsuarioLibro>{
    return this.http.put<AlquilerUsuarioLibro>(this.urlAlquileres+id,alquilerUsuarioLibro);
  }
  deleteAlquiler(id:number):Observable<AlquilerUsuarioLibro>{
    return this.http.delete<AlquilerUsuarioLibro>(this.urlAlquileres+id);
  }
}
