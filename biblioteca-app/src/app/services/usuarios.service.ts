import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario} from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  urlUsuarios:string="http://localhost:3000/api/usuarios/";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  getAllUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlUsuarios);
  }
  getUsuarioById(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(this.urlUsuarios+id);
  }
  postUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.urlUsuarios,usuario,this.httpOptions);
  }
  putUsuario(id:number,usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(this.urlUsuarios+id,usuario,this.httpOptions);
  }
  deleteUsuario(id:number):Observable<Usuario>{
    return this.http.delete<Usuario>(this.urlUsuarios+id);
  }
}
