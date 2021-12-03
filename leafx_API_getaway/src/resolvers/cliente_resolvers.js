const clienteResolver = {
    Query: {
        clienteById: async (_, { id }, {dataSources, userIdToken}) => {
            let response = await dataSources.clienteAPI.clienteByIdRequest(id);
            let userId = response.user;
            if(userId == userIdToken) {
                return response;
            } else {
                return null;
            }
        },

        MisClientes: async (_, {}, {dataSources, userIdToken}) => {
            if(userIdToken != null){
                return await dataSources.clienteAPI.clientesByUserRequest(userIdToken);
            } else {
                return null;
            }
        }
    },

    Mutation: {
        createCliente: async (_, { clienteData }, {dataSources, userIdToken}) => {
            if(userIdToken != null){
                const createClienteData = {
                    nombre: clienteData.nombre,
                    direccion: clienteData.direccion,
                    user: userIdToken
                }

                return await dataSources.clienteAPI.createCliente(createClienteData);
            } else {
                return null;
            }
        },

        updateCliente: async (_, {clienteData}, {dataSources, userIdToken}) => {
            let response = await dataSources.clienteAPI.clienteByIdRequest(clienteData.id);
            let userId = response.user;
            if(userId == userIdToken) {
                const updateClienteData = {
                    nombre: clienteData.nombre,
                    direccion: clienteData.direccion,
                    user: userIdToken
                }
                
                return await dataSources.clienteAPI.updateCliente(clienteData.id, updateClienteData);
            } else {
                return null;
            }    
        },

        deleteCliente: async (_, {id}, {dataSources, userIdToken}) => {
            let request = await dataSources.clienteAPI.clienteByIdRequest(id);
            let userId = request.user;
            if(userId == userIdToken) {
                await dataSources.clienteAPI.deleteCliente(id);
                return "Cliente eliminado";
            } else {
                return null;
            }
        }


    }
};

module.exports = clienteResolver;            
            