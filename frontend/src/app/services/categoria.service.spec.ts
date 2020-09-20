import { TestBed, inject, async} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { CategoriaService } from './categoria.service';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/Categoria';

class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
}


describe('CategoriaService', () => {
  let service: CategoriaService;
  const mockResponse:Categoria[] = [];
  const CatMock: Categoria ={
      id:100,
      nombre:'catprueba',
      descripcion:'descrprueba'

  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[CategoriaService, {
        provide: HttpClient,
        useClass: HttpClientMock
      }]
    });
    service = TestBed.inject(CategoriaService);
  });

  //prueba unitaria # 1
  it('debería de eliminar categoria con id valido', () => {
    expect(service.deleteCategoria).toBeTruthy;
  });

    fit('debería de ingresar categoria con mock de objeto', () => {
    expect(service.addCategoria(CatMock)).toBeTrue;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
