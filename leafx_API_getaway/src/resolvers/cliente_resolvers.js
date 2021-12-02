const clienteResolver = {
    Query: {
        clienteById: async (_, {id}, {dataSources, userIdToken}) => {
            let response = await dataSources.clienteAPI.clienteByIdRequest(id);
            let userId = response.user;
            if(userId == userIdToken) {
                return response;
            } else {
                return null;
            }
        }
    }
};

module.exports = clienteResolver;            
            