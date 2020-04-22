import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BibiliotecaComponent } from './bibilioteca/bibilioteca.component';


const routes: Routes = [
  {path:'', pathMatch:"full",redirectTo:'/bibliotecas'},
  {path:'bibliotecas', component:BibiliotecaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
