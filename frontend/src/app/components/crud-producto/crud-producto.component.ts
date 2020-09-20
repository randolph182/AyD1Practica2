import { Component, OnInit } from '@angular/core';
import {Producto} from '../../models/Producto';

import {ProductoService} from '../../services/producto.service'

@Component({
  selector: 'app-crud-producto',
  templateUrl: './crud-producto.component.html',
  styleUrls: ['./crud-producto.component.css']
})
export class CrudProductoComponent implements OnInit {
  
  constructor(private productoService:ProductoService) { 
    this.index = 0;
  }
  productos:any = [];
  producto:Producto;
  index:number;
  ngOnInit(): void {
    this.producto = new Producto();
    
    this.productoService.getProductos()
    .subscribe(
      res=>{
        this.productos = res;
        console.log(this.productos)
      },err=>{
        console.error(err);
      }
    )
  }
  onDelete(indice){
    console.log(indice);
    let prod = this.productos[indice];
    console.log(prod);
    this.productoService.deleteProducto(prod.id).subscribe(
      res=>{
        console.log('se supone que eliminó')
        console.log(res);
      },err=>{
        console.error(err);
      }
    )
  }
  onSave(){
    if(this.producto.descripcion!=""&&this.producto.nombre!=""&&this.producto.precio>0){

    }
    this.productoService.createProducto(this.producto)
    .subscribe(
      res=>{
        console.log(res);
      }
    )
    ;
  }
  onEdit(indice){
    let producto = this.productos[indice];
    this.productoService.updateProducto(producto)
      .subscribe(
        res=>{
          console.log(res);
        },err=>{
          console.log(err);
        }
      )
    ;
  }
}
