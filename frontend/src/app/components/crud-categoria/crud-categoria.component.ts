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
    private categoriaService:CategoriaService) {
    }

  addCategoria():void{

    this.categoriaService.addCategoria(this.categoria).
    subscribe(
      categoria => {
        alert('Categoria ingresada con exito');
        console.log(categoria);
      }
    );

  }

  getCategoria():void{
    this.categoriaService.getCategorias().
    subscribe(categoria =>{
      this.categorias = categoria as Categoria[];
      console.log("--------categoria local------------\n");
      console.log(categoria);
      console.log("--------categoria global------------\n");
      console.log(this.categoria);
    }, 
    error => console.error(error));
  }

  eliminarCategoria(categoria:Categoria):void{
    this.categoriaService.deleteCategoria(categoria).subscribe( usuario => { alert('categoria eliminada!');});
  }

  ngOnInit(): void {
      this.getCategoria();
  }

  onSave()
  {}

  onEdit(indice)
  {}

  onDelete(indice)
  {}
  
}
