import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BibiliotecaComponent } from './bibilioteca/bibilioteca.component';
import { LibrosComponent } from './componentes/libros/libros.component';


const routes: Routes = [
  {path:'', pathMatch:"full",redirectTo:'/bibliotecas'},
  {path:'bibliotecas', component:BibiliotecaComponent},
  {path:'libros',component:LibrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
