let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:3000';

   //Informacion de productos
   describe.only('Prueba para obtener informacion de la API: ',()=>{
      it('Debe poder obtener una lista de productos', async ()=>{
          let res = await chai
          .request(url)
          .get('/productos'); //obteniendo estudiantes
          expect(res.status).to.equal(200);
      });
  });