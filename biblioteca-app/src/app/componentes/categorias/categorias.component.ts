import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/modelos/categoria.model';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias:Categoria[];
  categoria:Categoria=new Categoria();
  modificando:boolean=false;
  cols = [  //Array amb les columnes que volem mostrar a la taula, el camp Field correspont al camp del model que farem servir i el HEader al text que es mostrarà
    { field: 'categoria_id', header: 'Id' },  
    { field: 'nombre', header: 'Nombre' }
  ]; 
  constructor(private categoriaService:CategoriasService) { }

  ngOnInit(): void {
    this.getAllCategorias();
  }

  getAllCategorias(){
    this.categoriaService.getAllCategories().subscribe(data=>this.categorias=data);
  }
  getCategoriaById(id:number){
    
    this.categoriaService.getCategoriaById(id).subscribe(data=>{
      this.categoria=data[0];
      this.modificando=true;
      console.log(data);
    });
  }
  eliminarCategoria(id:number){
    this.categoriaService.deleteCategoria(id).subscribe(()=>this.getAllCategorias());
  }
  insertCategoria(){
    this.categoriaService.postCategoria(this.categoria).subscribe(()=>this.getAllCategorias());

  }
  modificarCategoria(id:number){
    this.categoriaService.putCategoria(id,this.categoria).subscribe(()=>this.getAllCategorias());
  }
}
