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

   /*
   ******************************************************
   ******************** CRUD USUARIO ********************
   ******************************************************
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
            res.status(200).json({status: true});
          }
        }
    );
  });

  
  //OBTENER ULTIMO ID
  router.get('/ultimo_usuario', (req, res, next) => {
    db.query(
      'SELECT MAX(id_usuario) AS id FROM USUARIO',
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
  
  /*
   ********************************************************
   ******************** CRUD CATEGORIA ********************
   ********************************************************
  */
  //REGISTRO DE CATEGORIA
  router.post('/registrar_categoria', (req, res, next) => {
    db.query(
      'INSERT INTO CATEGORIA(nombre, descripcion) VALUES(?,?)',
      [req.body.nombre, req.body.descripcion],
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

  //MOSTRAR CATEGORIA
  router.get('/obtener_categoria', (req, res, next) => {
    db.query(
      'SELECT * FROM CATEGORIA',
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

  //ACTUALIZAR CATEGORIA
  router.put('/actualizar_categoria', (req, res, next) => {
    db.query(
      'UPDATE CATEGORIA SET nombre = ?, descripcion = ? WHERE id_categoria = ?',
      [req.body.nombre, req.body.descripcion, req.body.id],
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

  //ELIMINAR CATEGORIA
  router.post('/eliminar_categoria', (req, res, next) => {
    db.query(
      'DELETE FROM CATEGORIA WHERE id_categoria = ?',
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


  //metodo que obtiene el ultimo registro ingresado de los productos
  router.get('/ultima_categoria', (req, res, next) => {
    db.query(
      'SELECT MAX(id_categoria) AS id FROM CATEGORIA',
      (error, results) => {
        if(error)
        {
          console.error(error);
          res.status(500).json({status:'error'});
        }
        else
        {
          res.send(results[0]);
        }
      }
    );
  });

  //metodo que obtiene el ultimo registro ingresado de los productos
  router.get('/ultimo_producto', (req, res, next) => {
    db.query(
      'SELECT MAX(id_producto) AS id FROM PRODUCTO',
      (error, results) => {
        if(error)
        {
          console.error(error);
          res.status(500).json({status:'error'});
        }
        else
        {
          res.send(results[0]);
        }
      }
    );
  });

  return router;
}



  




module.exports = createRouter;


