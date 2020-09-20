import { TestBed, inject, async, ComponentFixtureAutoDetect} from '@angular/core/testing';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { UsuarioService } from './usuario.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { Usuario } from '../models/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';

class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
  post = jasmine.createSpy('httpClient.post');
  put = jasmine.createSpy('httpClient.put');

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

let url = 'http://localhost:3000/registrar_usuario';

fdescribe('UsuarioService', () => {
  let service: UsuarioService;
  let httpClientMock: HttpClientMock;
  const mockResponse:Usuario[] = [];
  const usuarioMock: Usuario = {
    id:1,
    id_usuario:1,
    nombre: 'Allen',
    apellido: 'Woods',
    pass: 'GoodJazz4EVER!',
    password: 'GoodJazz4EVER!',
    usuario:'JazzGood',
    rol:1
  };


  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[UsuarioService, {
        provide: HttpClient,
        useClass: HttpClientMock
      }]
    });
    service = TestBed.inject(UsuarioService);
    httpClientMock = TestBed.get(HttpClient);
  });


  

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('Devuelve un observable con el estado de ingreso de usuario y la respuesta de publicacion http', () => {
    
    const userObservable: Observable<Usuario> = of(usuarioMock);
    httpClientMock.post.and.returnValue(userObservable);

    
    
      service.addUsuario(usuarioMock)
      .subscribe(usuarioStatus => {
        expect(httpClientMock.post)
          .toHaveBeenCalledWith(url, usuarioMock);
        expect(JSON.stringify(usuarioStatus)).toBe(JSON.stringify(usuarioMock));
      });
  });

  fit('Devuelve un observable con los usuarios comparando su tamanio y la respuesta http', () => {
    
    const userObservable: Observable<Usuario[]> = of(mockResponse);
    httpClientMock.get.and.returnValue(userObservable);
    
      service.getUsuarios()
      .subscribe(usuarioStatus => {
        expect(httpClientMock.get)
          .toHaveBeenCalledWith(`http://localhost:3000/obtener_usuario`);
        expect(usuarioStatus.length).toBe(mockResponse.length);
      });
  });

  fit('Devuelve un observable con los usuarios y la respuesta http get', () => {
    
    const userObservable: Observable<Usuario[]> = of(mockResponse);
    httpClientMock.get.and.returnValue(userObservable);
    
      service.getUsuarios()
      .subscribe(usuarioStatus => {
        expect(httpClientMock.get)
          .toHaveBeenCalledWith(`http://localhost:3000/obtener_usuario`);
        expect(usuarioStatus).toEqual(mockResponse);
      });
  });

  fit('Devuelve un observable con el estado de modificacion de usuario y la respuesta de publicacion http put', () => {
    
    const userObservable: Observable<Usuario> = of(usuarioMock);
    httpClientMock.put.and.returnValue(userObservable);

    
    
      service.updateUsuario(usuarioMock)
      .subscribe(usuarioStatus => {
        expect(httpClientMock.put)
          .toHaveBeenCalledWith('http://localhost:3000/actualizar_usuario', usuarioMock);
        expect(JSON.stringify(usuarioStatus)).toBe(JSON.stringify(usuarioMock));
      });
  });

  fit('Devuelve un observable con el estado de eliminacion de usuario y la respuesta de eliminacion http', () => {
    
    const userObservable: Observable<Usuario> = of(usuarioMock);
    httpClientMock.post.and.returnValue(userObservable);

    
    
      service.darDeBaja(usuarioMock)
      .subscribe(usuarioStatus => {
        expect(httpClientMock.post)
          .toHaveBeenCalledWith(`http://localhost:3000/eliminar_usuario`, usuarioMock);
        expect(JSON.stringify(usuarioStatus)).toBe(JSON.stringify(usuarioMock));
      });
  });
});
