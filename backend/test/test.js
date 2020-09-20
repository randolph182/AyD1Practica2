let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const producto = require("../src/events") //mando a trare funcionalidades que me van servir para deshacer las pruebas unitarias
const url = 'http://localhost:3000';
let http = require('http');
const { parse } = require('path');
const { CLIENT_RENEG_WINDOW } = require('tls');

//Informacion de productos
describe('Prueba para obtener informacion de la API: ', () => {
   it('Debe poder obtener una lista de productos', async () => {
      let res = await chai
         .request(url)
         .get('/productos'); //obteniendo estudiantes
      expect(res.status).to.equal(200);
   });
});

//insercion de productos 
describe('Prueba para insertar un nuevo producto a la API: ', () => {
   it('Prueba para Insertar un nuevo producto', (done) => {
      let res = chai
         .request(url)
         .post('/nuevo_producto')
         .send({ nombre: "consome maller", precio: 23, descripcion: "El del pollito" })
         .end(function (err, res) {
            console.log(res.body)
            expect(res).to.have.status(200);
            done();
         });

   });
   it('Deshaciendo cambios sobre la ultima transaccion de insercion', () => {
      afterEach(async () => {
         let res_id = await chai
            .request(url)
            .get('/ultimo_producto');

         let res_del = await chai
            .request(url)
            .put('/eliminar_producto')
            .send({ id_producto: res_id.id });
            expect(res_del.status).to.equal(200);
      });
   });
});


//modificacion de productos 
describe('Prueba para modificar un producto a la API: ', () => {
   it('Prueba para modificar un nuevo producto', async() => {
      //obteniendo ultimo id ingresado a la base de datos
      let res_id = await chai
            .request(url)
            .get('/ultimo_producto');

      let res_upd= await chai
         .request(url)
         .put('/actualizar_producto')
         .send({ nombre: "consome maller", precio: 23, descripcion: "El del pollitox2 :v",id_producto:res_id.body.id});
            expect(res_upd.status).to.equal(200);

   });
});


//eliminacion de productos 
describe('Prueba para eliminar un producto de la API: ', () => {
    it('Simulacion de agregado y eliminacion de un nuevo producto', async() => {
      let res = await chai
         .request(url)
         .post('/nuevo_producto')
         .send({ nombre: "refresco", precio: 2, descripcion: "de la palma" });
         expect(res.status).to.equal(200);
   });
   afterEach(async () => {
      let res_id = await chai
         .request(url)
         .get('/ultimo_producto');

      let res_del = await chai
         .request(url)
         .put('/eliminar_producto')
         .send({ id_producto: res_id.body.id});
         expect(res_del.status).to.equal(200);
   });
});





