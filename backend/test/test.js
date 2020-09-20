let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:3000';

//Informacion de productos
describe('Prueba para obtener informacion de la API: ',()=>{
   it('Debe poder obtener una lista de productos', async ()=>{
         let res = await chai
         .request(url)
         .get('/productos'); //obteniendo estudiantes
         expect(res.status).to.equal(200);
   });
});

describe.only('Prueba para insertar un nuevo producto a la API: ',()=>{
   it('Prueba para Insertar un nuevo producto', (done)=>{
      chai.request(url)
            .post('/nuevo_producto')
            .send({nombre: "consome maller",precio:23,descripcion:"El del pollito"})
            .end(function(err,res){
               console.log(res.body)
               expect(res).to.have.status(500);
               done();
            });
   });
});

//insercion  de productos


