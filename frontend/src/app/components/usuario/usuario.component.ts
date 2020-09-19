import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  faStar = faStar;
  faPlus = faPlus;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  usuarios:Usuario[] = [];

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
  }

  getUsuarios():void{
    this.usuarioService.getUsuarios().
    subscribe(usuarios =>{
      this.usuarios = usuarios as Usuario[];
      console.log("--------usuarios local------------\n");
      console.log(usuarios);
      console.log("--------usuarios global------------\n");
      console.log(this.usuarios);
    }, 
    error => console.error(error));
  }



  eliminar(user:Usuario):void{
    this.usuarioService.darDeBaja(user).subscribe( usuario => { alert('Usuario eliminado Dx');});

  }

}
