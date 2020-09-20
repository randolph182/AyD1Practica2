let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:3000';

describe('Prueba para el CRUD de Usuario:', () => {
    it('Registrar un usuario', async () => {
        let res = await chai
        .request(url)
        .post('/registrar_usuario')
        .send({nombre:"oscar", apellido:"rodriguez", rol:1, usuario:"oscar", pass:"1234"});
        expect(res.status).to.equal(200);
    });

    afterEach(async () => {
        let res = await chai
        .request(url)
        .get('/ultimo_usuario');
        
        let borrar = await chai
        .request(url)
        .post('/eliminar_usuario')
        .send({id:res.body[0].id})
    })
});