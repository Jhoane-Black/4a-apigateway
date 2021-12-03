const { gql } = require('apollo-server');

const productoTypeDef = gql`
    type Producto{
        id: Int!
        nombre: String!
        precio: Int!
        stock: Int!
        proveedor: Int!
    }

    type Query{
        productosByproveedor(id_proveedor: Int!): [Producto]
        productoByid(id: Int!): Producto
    }

    input ProductoInput{
        nombre: String!
        precio: Int!
        stock: Int!
        proveedor: Int!
    }

    input ProductoUpdate{
        id: Int!
        nombre: String!
        precio: Int!
        stock: Int!
        proveedor: Int!
    }

    type Mutation{
        createProducto(productoData: ProductoInput!): Producto
        updateProducto(productoData: ProductoUpdate!): Producto
        deleteProducto(id: Int!): String
    }
`;

module.exports = productoTypeDef;