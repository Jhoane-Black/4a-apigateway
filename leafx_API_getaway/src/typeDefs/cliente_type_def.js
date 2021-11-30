const { gql } = require('apollo-server');

const clienteTypeDef = gql`
    type Cliente{
        id: Int
        nombre: String!
        direccion: String!
        user: Int!
    }

    type Query{
        clienteById(id: Int!): Cliente
    }
`;

module.exports = clienteTypeDef;