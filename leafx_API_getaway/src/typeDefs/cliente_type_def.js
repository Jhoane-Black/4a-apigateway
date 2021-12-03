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
        MisClientes: [Cliente]
    }

    input ClienteInput{
        nombre: String!
        direccion: String!
    }

    input ClienteUpdate{
        id: Int!
        nombre: String!
        direccion: String!
    }

    type Mutation{
        createCliente(clienteData: ClienteInput!): Cliente
        updateCliente(clienteData: ClienteUpdate!): Cliente
        deleteCliente(id: Int!): String
    }
`;

module.exports = clienteTypeDef;