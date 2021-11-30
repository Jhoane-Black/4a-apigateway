const { gql } = require('apollo-server');

const productoTypeDef = gql`
    type Producto{
        nombre: String!
        precio: Int!
        stock: Int!
        proveedor: Int!
    }

    type Query{
        productosByproveedor(id_proveedor: Int!): [Producto]
        productoByid(id: Int!): Producto
    }
`;

module.exports = productoTypeDef;