import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ProductoService } from './producto.service';

import {HttpClientTestingModule,  HttpTestingController} from '@angular/common/http/testing'
describe('ProductoService', () => {
  let service: ProductoService,
  httpTestingController:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[
        ProductoService,
        HttpClient
      ]
    });
    service = TestBed.inject(ProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //Primera prueba unitaria 
  it(' deberia eliminar producto deberia de no estar definido',()=>{
    expect(service.deleteProducto("")).toBeUndefined();
  });

  it('deberia',()=>{

  });


});
