import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../modelos/categoria.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  urlCategorias="http://localhost:3000/api/categorias/";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { }

  getAllCategories():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.urlCategorias);
  }
  getCategoriaById(id:number):Observable<Categoria>{
    return this.http.get<Categoria>(this.urlCategorias+id);
  }
  putCategoria(id:number, categoria:Categoria):Observable<Categoria>{
    console.log(categoria.nombre);
    return this.http.put<Categoria>(this.urlCategorias+id,categoria);
  }
  postCategoria(categoria:Categoria):Observable<Categoria>{
    return this.http.post<Categoria>(this.urlCategorias,categoria,this.httpOptions)
  }
  deleteCategoria(id:number):Observable<Categoria>{
    return this.http.delete<Categoria>(this.urlCategorias+id);
  }

}
