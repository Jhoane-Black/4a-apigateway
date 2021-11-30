const { gql } = require('apollo-server');


const authTypeDefs = gql`
    input LoginInput {
        username: String!
        password: String!
    }

    input SignupInput{
        username: String!
        email: String
        password1: String!
        password2: String!
    }

    input SignupInputCliente{
        username: String!
        email: String
        password1: String!
        password2: String!
        nombre: String!
        direccion: String!
    }

    input SignupInputProveedor{
        username: String!
        email: String
        password1: String!
        password2: String!
        nombre: String!
        direccion: String!
        nit: Int!
    }

    type Token {
        key: String!
    }

    type Mutation{
        login(credentials: LoginInput!): Token!
        signUp(signupData: SignupInput!): Token!
        signUpCliente(signupData: SignupInputCliente!): Token!
        signUpProveedor(signupData: SignupInputProveedor!): Token!
    }
`;

module.exports = authTypeDefs;