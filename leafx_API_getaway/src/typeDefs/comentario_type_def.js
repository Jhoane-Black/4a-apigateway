const { gql } = require('apollo-server');

const comentarioTypeDef = gql`
    type Comentario{
        id: Int!
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

    input ComentarioInput{
        calificacion: Int!
        comentario: String!
        creacion: String
        producto: Int!
        cliente: Int!
    }

    input ComentarioUpdate{
        id: Int!
        calificacion: Int!
        comentario: String!
        creacion: String
        producto: Int!
        cliente: Int!
    }

    type Mutation{
        createComentario(comentarioData: ComentarioInput!): Comentario
        updateComentario(comentarioData: ComentarioUpdate!): Comentario
        deleteComentario(id: Int!): String
    }
`;

module.exports = comentarioTypeDef;