import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import { fas } from '@fortawesome/free-solid-svg-icons';
//import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { HomeComponent } from './components/home/home.component';
import { CrudCategoriaComponent } from './components/crud-categoria/crud-categoria.component';
import { CommonModule } from '@angular/common';
import { CrudProductoComponent } from './components/crud-producto/crud-producto.component';

import { UsuarioComponent } from './components/usuario/usuario.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { ModUsuarioComponent } from './components/mod-usuario/mod-usuario.component';
library.add(fas);
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    HomeComponent,
    CrudCategoriaComponent,
    HomeComponent,
    UsuarioComponent,
    RegistroUsuarioComponent,
    CrudProductoComponent,
    ModUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
