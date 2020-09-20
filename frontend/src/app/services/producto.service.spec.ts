import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ProductoService } from './producto.service';
import { Producto } from '../models/Producto';
describe('ProductoService', () => {
  let service: ProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[
        ProductoService,HttpClient
      ]
    });
    service = TestBed.inject(ProductoService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
    console.log("asldf");
  });
  it('Test funcionamiento correcto del service', (done) => {
    let producto = new Producto();
    producto.nombre="holi";
    producto.precio=2;
    producto.descripcion="asdf";
    service.createProducto(producto).subscribe((res: any) => {
      expect(res).toBe('ok');
      done();
    });
  });
  //Primera prueba unitaria 
  it(' deberia eliminar producto deberia de no estar definido',()=>{
    expect(service.deleteProducto("")).toBeUndefined();
  });



});
