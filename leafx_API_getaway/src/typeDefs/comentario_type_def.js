const { gql } = require('apollo-server');

const comentarioTypeDef = gql`
    type Comentario{
        comentario: String!
        calificacion: Int!
        cliente: Int!
        producto: Int!
        creacion: String
    }

    type Query{
        comentarioByid(id: Int!): Comentario
        comentariosByproducto(id_producto: Int!): [Comentario]
        comentariosBycliente(id_cliente: Int!): [Comentario]
    }
`;

module.exports = comentarioTypeDef;