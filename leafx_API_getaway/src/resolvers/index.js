const clienteResolver = require('./cliente_resolvers');
const proveedorResolver = require('./proveedor_resolvers')
const authResolver = require('./auth_resolvers');
const productoResolver = require('./producto_resolvers')
const comentarioResolver = require('./comentario_resolvers')
const saleRegisterResolvers = require('./saleregister_resolvers');

const lodash = require('lodash');

const resolvers = lodash.merge(clienteResolver, authResolver, proveedorResolver, productoResolver, comentarioResolver, saleRegisterResolvers);

module.exports = resolvers;