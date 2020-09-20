import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  usuarioForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group(
      {
        nombre: ['',Validators.required],
        apellido: ['',Validators.required],
        usuario: ['', Validators.required],
        password:['', Validators.required],
        rol: ['',Validators.required]
        
      }
    );

  }

  public getError(controlName:string):string{
    let error= '';
    const control = this.usuarioForm.controls[controlName];
    if(control.touched && control.errors != null){
      if(controlName == 'clave'){
        error = 'Se necesita '+controlName+' campo obligatorio, al menos 1 letra, 1 simbolo y 1 numero.';
      }else {
        error = 'Se necesita '+controlName+' campo obligatorio.';
      }

    }
    return error;

  }

  addUsuario():void{

    
    let usuario:Usuario = new Usuario();
    usuario.apellido = this.usuarioForm.controls['apellido'].value;
    usuario.nombre = this.usuarioForm.controls['nombre'].value;
    usuario.usuario = this.usuarioForm.controls['usuario'].value;
    usuario.pass = this.usuarioForm.controls['password'].value;
    usuario.rol = this.usuarioForm.controls['rol'].value;
    console.log(usuario);
    

    this.usuarioService.addUsuario(usuario).
      subscribe(
        usuario => {
          alert('Usuario ingresado con exito');
          console.log(usuario);
          // redireccionamos para que este en una pagina para que valide su correo..

        }
      );

    
  }



}
