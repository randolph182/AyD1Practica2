import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }
  //  router.post('/nuevo_producto', (req, res, next) => {
  //    router.put('/eliminar_producto', (req, res, next) => {
  //    router.put('/actualizar_producto', (req, res, next) => {
  //    router.get('/productos', (req, res, next) => {
  API_URI='http://localhost:3000'
  getProductos(){
    return this.http.get(`${this.API_URI}/productos`);
  }
  updateProducto(producto){
    return this.http.put(`${this.API_URI}/actualizar_producto`,producto);
  }
  deleteProducto(id){
    if(id instanceof Number){
      const valor = {id_producto:id}
      return this.http.put(`${this.API_URI}/eliminar_producto`,valor);
    }
    return undefined;
  }
  createProducto(producto){
    return this.http.post(`${this.API_URI}/nuevo_producto`,producto);
  }
}
