const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here

  /*
  ******************** CRUD USUARIO ********************
  */

  //REGISTRO DE USUARIO
  router.post('/registrar_usuario', (req, res, next) => {
    db.query(
      'INSERT INTO USUARIO(nombre, apellido, rol, usuario, pass) VALUES(?,?,?,?,?)',
      [req.body.nombre, req.body.apellido, req.body.rol, req.body.usuario, req.body.pass],
        (error) => {
          if(error)
          {
            console.error(error);
            res.status(500).json({status:'error'});
          }
          else
          {
            res.status(200).json({status:'ok'});
          }
        }
    );
  });

  //MOSTRAR USUARIO
  router.get('/obtener_usuario', (req, res, next) => {
    db.query(
      'SELECT * FROM USUARIO',
      (error, results) => {
        if(error)
        {
          console.error(error);
          res.status(500).json({status:'error'});
        }
        else
        {
          res.status(200).json(results);
        }
      }
    );
  });

  //ACTUALIZAR USUARIO
  router.put('/actualizar_usuario', (req, res, next) => {
    db.query(
      'UPDATE USUARIO SET nombre = ?, apellido = ?, rol = ?, usuario = ?, pass = ? WHERE id_usuario = ?',
      [req.body.nombre, req.body.apellido, req.body.rol, req.body.usuario, req.body.password, req.body.id],
        (error) => {
          if(error)
          {
            console.error(error);
            res.status(500).json({status:'error'});
          }
          else
          {
            res.status(200).json({status:'ok'});
          }
        }
    );
  });

  //ELIMINAR USUARIO
  router.post('/eliminar_usuario', (req, res, next) => {
    db.query(
      'DELETE FROM USUARIO WHERE id_usuario = ?',
      [req.body.id],
        (error) => {
          if(error)
          {
            console.error(error);
            res.status(500).json({status:'error'});
          }
          else
          {
            res.status(200).json({status:'ok'});
          }
        }
    );
  });

  return router;
}
module.exports = createRouter;


