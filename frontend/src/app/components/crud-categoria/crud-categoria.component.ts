import { Component, OnInit } from '@angular/core';
import {Categoria} from '../../models/Categoria'
@Component({
  selector: 'app-crud-categoria',
  templateUrl: './crud-categoria.component.html',
  styleUrls: ['./crud-categoria.component.css']
})
export class CrudCategoriaComponent implements OnInit {
  categorias:any=[];
  index:number;
  categoria:Categoria;
  constructor() { }

  ngOnInit(): void {

  }
  onDelete(indice){
    
  }
  onSave(){

  }
  onEdit(indice){

  }
}
