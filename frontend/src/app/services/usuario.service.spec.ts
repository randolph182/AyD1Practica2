import { TestBed, inject, async} from '@angular/core/testing';

import { UsuarioService } from './usuario.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';

class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
}

fdescribe('UsuarioService', () => {
  let service: UsuarioService;
  const mockResponse:Usuario[] = [];


  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[UsuarioService, {
        provide: HttpClient,
        useClass: HttpClientMock
      }]
    });
    service = TestBed.inject(UsuarioService);
  });


  /*fdescribe('get data', () => {
    it('should get results',
    inject([HttpTestingController, UsuarioService], (httpMock: HttpTestingController, usuarioServiceTested: UsuarioService) => {
      const usuariosUrl = 'https://localhost:3000/obtener_usuario';
      usuarioServiceTested.getUsuarios()
      .subscribe(
        (res) => {
          expect([]).toBe.arguments([]);
        }
      );
      const req = httpMock.expectOne(usuariosUrl);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    })
  );
  });*/

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
