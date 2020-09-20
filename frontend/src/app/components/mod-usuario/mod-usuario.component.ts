import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mod-usuario',
  templateUrl: './mod-usuario.component.html',
  styleUrls: ['./mod-usuario.component.css']
})
export class ModUsuarioComponent implements OnInit {
  usuario:Usuario;
  constructor(private route:ActivatedRoute,
    private location:Location,
    private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.getUsuario();

  }

  goBack(){
    this.location.back();
  }

  getUsuario():void{
    
    this.usuario.id = +this.route.snapshot.paramMap.get('id');
    this.usuario.nombre = this.route.snapshot.paramMap.get('nombre');
    this.usuario.apellido = this.route.snapshot.paramMap.get('apellido');
    this.usuario.usuario = this.route.snapshot.paramMap.get('usuario');
    this.usuario.pass = this.route.snapshot.paramMap.get('password');
    this.usuario.rol   = +this.route.snapshot.paramMap.get('rol');

    console.log(this.usuario);

    
  }

  actualizarDatos(){
    
    this.usuarioService.updateUsuario(this.usuario)
      .subscribe(() => this.goBack());
  }



}
