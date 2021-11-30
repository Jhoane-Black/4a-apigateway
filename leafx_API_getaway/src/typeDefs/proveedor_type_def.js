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
    }

`;

module.exports = proveedorTypeDef;