const productoResolver = {
    Query: {
        productoByid: async (_, { id }, {dataSources}) => {
            return await dataSources.productoAPI.productoByIdRequest(id);
        },

        productosByproveedor: async (_, { id_proveedor }, {dataSources}) => {
            return await dataSources.productoAPI.productosByProveedorRequest(id_proveedor);
        }
    }
};

module.exports = productoResolver;  