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
import {ListboxModule} from 'primeng/listbox';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { AlquilerComponent } from './componentes/alquiler/alquiler.component';
import {CalendarModule} from 'primeng/calendar';

//Registrar idiomes
import { registerLocaleData } from '@angular/common';
//Idiomes
import localeEs from '@angular/common/locales/es';
import { LOCALE_ID } from '@angular/core';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    BibiliotecaComponent,
    TopbarComponent,
    LibrosComponent,
    DetallesBibliotecaComponent,
    CategoriasComponent,
    UsuariosComponent,
    AlquilerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ListboxModule,
    CalendarModule
    

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
