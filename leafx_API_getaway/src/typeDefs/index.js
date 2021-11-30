const clienteTypeDef = require('./cliente_type_def');
const proveedorTypeDef = require('./proveedor_type_def');
const authTypeDefs = require('./auth_type_def');
const productoTypeDefs = require('./producto_type_def');
const comentarioTypeDefs = require('./comentario_type_def');


const schemasArray = [clienteTypeDef, authTypeDefs, proveedorTypeDef, productoTypeDefs, comentarioTypeDefs];


module.exports = schemasArray;