import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BibiliotecaComponent } from './bibilioteca/bibilioteca.component';
import { TopbarComponent } from './componentes/topbar/topbar.component';
import {TableModule} from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LibrosComponent } from './componentes/libros/libros.component';
import { DetallesBibliotecaComponent } from './componentes/detalles-biblioteca/detalles-biblioteca.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { CategoriasComponent } from './componentes/categorias/categorias.component';



@NgModule({
  declarations: [
    AppComponent,
    BibiliotecaComponent,
    TopbarComponent,
    LibrosComponent,
    DetallesBibliotecaComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
