import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudCategoriaComponent } from './components/crud-categoria/crud-categoria.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { HomeComponent } from './components/home/home.component';
import { CrudProductoComponent } from './crud-producto/crud-producto.component';

const routes: Routes = [
  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  {path: 'encabezado', component:EncabezadoComponent},
  {path: 'home', component:HomeComponent},
  {path: 'categoria', component:CrudCategoriaComponent},
  {path: 'producto', component:CrudProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
