let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:3000';
const nock = require('nock');
const response = require('./usuarios');

describe('Prueba para el Registro y Actualización de Usuario:', () => {
    it('Registrar un usuario', async () => {
        let res = await chai
        .request(url)
        .post('/registrar_usuario')
        .send({nombre:"oscar", apellido:"rodriguez", rol:1, usuario:"oscar", pass:"1234"});
        expect(res.status).to.equal(200);
    });

    it('Actualizar un usuario', async () => {
        let res = await chai
        .request(url)
        .post('/registrar_usuario')
        .send({nombre:"oscar", apellido:"rodriguez", rol:1, usuario:"oscar", pass:"1234"});
        
        let ultimo = await chai
        .request(url)
        .get('/ultimo_usuario');

        let r = await chai 
        .request(url)
        .put('/actualizar_usuario')
        .send({nombre:"Alejandro", apellido:"gavasdf", rol:4, usuario:"Ale", pass:"1234567", id:ultimo.body[0].id});
        expect(r.body.status).to.be.a('string');
    });

    after(async () => {
        let res = await chai
        .request(url)
        .get('/ultimo_usuario');
        
        let borrar = await chai
        .request(url)
        .post('/eliminar_usuario')
        .send({id:res.body[0].id})
    });
});

describe('Prueba para Obtención y Eliminación de usuario: ', () => {
    it('Obtener usuarios', async () => {
        let res = await chai
        .request(url)
        .get('/obtener_usuario');
        expect(res.body).to.be.an('array');
    });

    it('Eliminar un usuario', async () => {
        let res = await chai
        .request(url)
        .post('/registrar_usuario')
        .send({nombre:"oscar", apellido:"rodriguez", rol:1, usuario:"oscar", pass:"1234"});
        
        let ultimo = await chai
        .request(url)
        .get('/ultimo_usuario');
        
        let borrar = await chai
        .request(url)
        .post('/eliminar_usuario')
        .send({id:ultimo.body[0].id})
        expect(borrar.body.status).to.be.true;
    });
});

describe('Prueba utilizando Mock: ', () => {
    beforeEach(() => {
        nock(url)
        .post('/registrar_usuario')
        .reply(200, response);
    });

    it('Registrar un usuario', async () => {
        let res = await chai
        .request(url)
        .post('/registrar_usuario')
        .send({nombre:"oscar", apellido:"rodriguez", rol:1, usuario:"oscar", pass:"1234"});
        expect(res.status).to.equal(200);
    });
});