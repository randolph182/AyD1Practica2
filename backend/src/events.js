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

//******Obtener productos******
router.get('/productos', (req, res, next) => {
  db.query(
    'SELECT * FROM PRODUCTO',
    [],
    (error,results) => {
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




//******Acutalizar producto******
router.put('/actualizar_producto', (req, res, next) => {
    db.query(
      'UPDATE PRODUCTO SET nombre=?,precio=?,descripcion=? WHERE id_producto=?',
      [req.body.nombre,req.body.precio,req.body.descripcion,req.body.id_producto],
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

//******eliminar producto******
router.put('/eliminar_producto', (req, res, next) => {

  db.query(
    'DELETE FROM PRODUCTO WHERE id_producto = ?',
    [req.body.id_producto],
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


router.post('/nuevo_producto', (req, res, next) => {
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


