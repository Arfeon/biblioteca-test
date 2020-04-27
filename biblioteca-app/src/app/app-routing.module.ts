import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BibiliotecaComponent } from './bibilioteca/bibilioteca.component';
import { LibrosComponent } from './componentes/libros/libros.component';
import { DetallesBibliotecaComponent } from './componentes/detalles-biblioteca/detalles-biblioteca.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { AlquileresComponent } from './componentes/alquileres/alquileres.component';


const routes: Routes = [
  {path:'', pathMatch:"full",redirectTo:'/bibliotecas'},
  {path:'bibliotecas', component:BibiliotecaComponent},
  {path:'bibliotecas/:id',component:DetallesBibliotecaComponent},
  {path:'libros',component:LibrosComponent},
  {path:'categorias',component:CategoriasComponent},
  {path:'usuarios',component:UsuariosComponent},
  {path:'alquileres',component:AlquileresComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
