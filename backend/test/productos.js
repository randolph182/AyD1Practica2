const casual = require('casual')

module.exports = () => {
   casual.define("producto", function() {
     return {
       id: casual.uuid,
       name: casual.first_name,
       precio: casual.integer(from = -1000, to = 1000),
       descripcion: casual.description            
     };
   });
   const data = {
      productos: []
   };
   // Create 10 productos
   for (let i = 0; i < 3; i++) {
     data.productos.push(casual.producto);
   }
   return data;
 };