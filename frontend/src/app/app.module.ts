import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { HomeComponent } from './components/home/home.component';
import { CrudCategoriaComponent } from './components/crud-categoria/crud-categoria.component';
import { CommonModule } from '@angular/common';
import { CrudProductoComponent } from './crud-producto/crud-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    HomeComponent,
    CrudCategoriaComponent,
    CrudProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
