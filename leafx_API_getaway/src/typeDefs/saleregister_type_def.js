const {gql} = require('apollo-server');

const saleRegisterTypeDefs = gql`
    type SaleRegister{
        registroID: String
        cliente: Int!
        proveedor: Int!
        producto: Int
        cantidad: Int
        precio: Int
        total: Int
        fecha: String
        promocion: String
    }
    type CSaleRegister{
        registroID: String
        cliente: Int
        proveedor: Int
        producto: Int
        cantidad: Int
        precio: Int
        total: Int
        fecha: String
        promocion: String
    }
    input SaleRegisterInput{
        registroID: String
        cliente: Int!
        proveedor: Int!
        producto: Int!
        cantidad: Int
        precio: Int
        total: Int
        fecha: String
        promocion: String
    }

    type Query{
        saleRegisterByClient( cliente: Int!): [SaleRegister]
        saleRegisterByProduct( producto: Int!): [SaleRegister]
        saleRegisterByProvider( proveedor: Int!): [SaleRegister]
        saleRegisterByClientAndProduct( cliente: Int!, producto: Int!): [SaleRegister]
        saleRegisterById(id: String!, proveedor: Int!): SaleRegister
    }
    type Mutation{
        createSaleRegister(saleRegister: SaleRegisterInput!): SaleRegister
        deleteSaleRegister(id: String): String
    }
`;

module.exports = saleRegisterTypeDefs;