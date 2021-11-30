const proveedorResolver = {
    Query: {
        proveedorById: async (_, { id }, {dataSources}) => {
            return await dataSources.proveedorAPI.proveedorByIdRequest(id);
        }
    }
};

module.exports = proveedorResolver;