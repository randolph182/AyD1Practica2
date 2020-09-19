import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudCategoriaComponent } from './components/crud-categoria/crud-categoria.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ModUsuarioComponent } from './components/mod-usuario/mod-usuario.component';

const routes: Routes = [
  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  {path: 'encabezado', component:EncabezadoComponent},
  {path: 'home', component:HomeComponent},
  {path: 'categoria', component:CrudCategoriaComponent}
  {path: 'registro-usuario', component:RegistroUsuarioComponent},
  {path: 'usuario', component:UsuarioComponent},
  {path: 'mod-usuario/:id/:nombre/:apellido/:usuario/:password/:rol', component:ModUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
