const { gql } = require('apollo-server');

const proveedorTypeDef = gql`
    type Proveedor{
        id: Int
        nombre: String!
        direccion: String!
        nit: Int!
        user: Int!
    }

    type Query{
        proveedorById(id: Int!): Proveedor
        MisProveedores: [Proveedor]
    }

    input ProveedorInput{
        nombre: String!
        direccion: String!
        nit: Int!
    }

    input ProveedorUpdate{
        id: Int!
        nombre: String!
        direccion: String!
        nit: Int!
    }

    type Mutation{
        createProveedor(proveedorData: ProveedorInput!): Proveedor
        updateProveedor(proveedorData: ProveedorUpdate!): Proveedor
        deleteProveedor(id: Int!): String
    }

`;

module.exports = proveedorTypeDef;