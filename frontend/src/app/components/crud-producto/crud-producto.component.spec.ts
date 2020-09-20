import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ɵCodegenComponentFactoryResolver } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductoService } from 'src/app/services/producto.service';

import { CrudProductoComponent } from './crud-producto.component';

describe('CrudProductoComponent', () => {
  let component: CrudProductoComponent;
  let fixture: ComponentFixture<CrudProductoComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[ProductoService],
      declarations: [ CrudProductoComponent ],
      imports:[
        HttpClientTestingModule
      ]
    })
    .compileComponents();
    //httpMock=TestBed.inject(HttpTestingController);
    //productoService = TestBed.get(httpMock);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(()=>{
    //component = new CrudProductoComponent(productoService);
  })
  it('should be true', () => {
    expect(component).toBeTruthy();  
  });

  it('deberia iniciar el indice en 0', () => {
    expect(component.index==0).toBeTruthy();
  });



});
