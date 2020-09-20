import { TestBed, inject, async} from '@angular/core/testing';

import { UsuarioService } from './usuario.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { Usuario } from '../models/usuario';

describe('UsuarioService', () => {
  let service: UsuarioService;
  const mockResponse:Usuario = new Usuario();


  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[UsuarioService]
    });
    service = TestBed.inject(UsuarioService);
  });


  describe('get data', () => {
    it('should get results',
    inject([HttpTestingController, UsuarioService], (httpMock: HttpTestingController, usuarioServiceTested: UsuarioService) => {
      const swapiUrl = 'https://localhost:3000/obtener_usuario';
      usuarioServiceTested.getUsuarios()
      .subscribe(
        (res) => {
          expect(res).toEqual();
        }
      );
      const req = httpMock.expectOne(swapiUrl);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    })
  );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
