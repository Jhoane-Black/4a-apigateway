const clienteResolver = {
    Query: {
        clienteById: async (_, {id}, {dataSources}) => {
            return await dataSources.clienteAPI.clienteByIdRequest(id);
        }
    }
};

module.exports = clienteResolver;            
            