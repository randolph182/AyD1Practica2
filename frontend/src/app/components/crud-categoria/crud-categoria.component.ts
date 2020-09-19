import { Component, OnInit } from '@angular/core';
import {Categoria} from '../../models/Categoria';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriaService} from '../../services/categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-categoria',
  templateUrl: './crud-categoria.component.html',
  styleUrls: ['./crud-categoria.component.css']
})
export class CrudCategoriaComponent implements OnInit {
  categorias:any=[];
  index:number;
  //categoriaForm:FormGroup;

  categoria:Categoria;
  constructor(private router:Router,
    private categoriaService:CategoriaService) { }

  addCategoria():void{

    //let categoria:Categoria = new Categoria();
    //this.categoria.nombre = this.categoriaForm.controls['categoria-input'].value;

    this.categoriaService.addCategoria(this.categoria).
    subscribe(
      categoria => {
        alert('Categoria ingresada con exito');
        console.log(categoria);
      }
    );

  }

  ngOnInit(): void {

  }
  onDelete(indice){
    
  }
  onSave(){

  }
  onEdit(indice){

  }
}
