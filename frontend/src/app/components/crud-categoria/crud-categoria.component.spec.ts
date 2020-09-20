import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Categoria } from 'src/app/models/Categoria';
import { CrudCategoriaComponent } from './crud-categoria.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { CategoriaService} from '../../services/categoria.service';
import { of } from 'rxjs';

class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
  post = jasmine.createSpy('httpClient.post');
  put = jasmine.createSpy('httpClient.put');
}


let url = 'http://localhost:3000/registrar_categoria';
describe('CrudCategoriaComponent', () => {
  let component: CrudCategoriaComponent;
  let fixture: ComponentFixture<CrudCategoriaComponent>;
  let categoria:Categoria;
  let service:CategoriaService;
  let httpClientMock: HttpClientMock;
  const CatMock: Categoria ={
    id:100,
    nombre:'catprueba',
    descripcion:'descrprueba'

}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudCategoriaComponent ],
      providers:[{
        provide: HttpClient,
        useClass: HttpClientMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('valores de modelo categoria deberían de estar vacios', () => {
    expect(categoria.descripcion).toBeUndefined();
  });

  fit('debería de ingresar categoria con mock de objeto', () => {
    const catObservable: Observable<Categoria> = of(CatMock);
    httpClientMock.post.and.returnValue(catObservable);

    
    
      service.addCategoria(CatMock)
      .subscribe(catStatus => {
        expect(httpClientMock.post)
          .toHaveBeenCalledWith(url, CatMock);
        expect(JSON.stringify(catStatus)).toBe(JSON.stringify(CatMock));
      });
    });
});
