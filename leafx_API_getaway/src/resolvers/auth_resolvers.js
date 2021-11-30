const fetch = require('node-fetch');
const serverConfig = require('../server')

const authResolver = {
    Mutation: {
        login: async (_, { credentials }, { dataSources }) => {
            return await dataSources.authAPI.loginRequest(credentials);
        },

        signUp: async (_, { signupData }, { dataSources }) => {
            const userData = {
                username: signupData.username,
                email: signupData.email,
                password1: signupData.password1,
                password2: signupData.password2
            }
            return await dataSources.authAPI.createUser(userData);
        }, 

        signUpCliente: async (_, { signupData }, { dataSources }) => {
            //Creating User
            const userData = {
                username: signupData.username,
                email: signupData.email,
                password1: signupData.password1,
                password2: signupData.password2
            }

            let token = await dataSources.authAPI.createUser(userData);

            
            // Get Id User
            let requestOptions = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json" ,
                    "Authorization": "token " + token.key
                },
                redirect: "follow"
            }

            let response = await fetch(`${serverConfig.auth_inv_api_url}/inventario/user/`, requestOptions);

            let id_cliente = { idToken: (await response.json()).id};

            
            // Creating Cliente
            const clienteData = {
                nombre: signupData.nombre,
                direccion: signupData.direccion,
                user: id_cliente.idToken
            }

            await dataSources.clienteAPI.createCliente(clienteData);
        
            return token;
        },

        signUpProveedor: async (_, { signupData }, { dataSources }) => {
            //Creating User
            const userData = {
                username: signupData.username,
                email: signupData.email,
                password1: signupData.password1,
                password2: signupData.password2
            }
            
            let token = await dataSources.authAPI.createUser(userData);

            
            // Get Id User
            let requestOptions = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json" ,
                    "Authorization": "token " + token.key
                },
                redirect: "follow"
            }

            let response = await fetch(`${serverConfig.auth_inv_api_url}/inventario/user/`, requestOptions);

            let id_proveedor = { idToken: (await response.json()).id};


            
            // Creating Proveedor
            const proveedorData = {
                nombre: signupData.nombre,
                direccion: signupData.direccion,
                nit: signupData.nit,
                user: id_proveedor.idToken
            }

            await dataSources.proveedorAPI.createProveedor(proveedorData);
        
            return token;
        }
    }
}

module.exports = authResolver;