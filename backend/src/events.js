const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here
/*
*****************************************************************
************Crud de Productos************
*****************************************************************
*/
router.post('/producto/nuevo', (req, res, next) => {
  db.query(
    'INSERT INTO PRODUCTO(nombre,precio,descripcion) VALUES(?,?,?)',
    [req.body.nombre,req.body.precio,req.body.descripcion],
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
  )
});

  return router;
}






module.exports = createRouter;


