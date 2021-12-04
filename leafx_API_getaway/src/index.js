const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const ClienteAPI = require('./dataSources/cliente_api')
const AuthAPI = require('./dataSources/auth_api')
const ProveedorAPI = require('./dataSources/proveedor_api')
const ProductoAPI = require('./dataSources/producto_api')
const ComentarioAPI = require('./dataSources/comentario_api')
const SaleRegisterAPI = require('./dataSources/saleregister_api')
const authentication = require('./utils/authentication');


const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        clienteAPI: new ClienteAPI(),
        authAPI: new AuthAPI(),
        proveedorAPI: new ProveedorAPI(),
        productoAPI: new ProductoAPI(),
        comentarioAPI: new ComentarioAPI(),
        saleRegisterAPI: new SaleRegisterAPI()
    }),
    introspection: true,
    playground: true
})


server.listen(process.env.PORT || 4000).then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
})