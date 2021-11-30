const comentarioResolver = {
    Query: {
        comentarioByid: async (_, { id }, {dataSources}) => {
            return await dataSources.comentarioAPI.comentarioByIdRequest(id);
        },

        comentariosByproducto: async (_, { id_producto }, {dataSources}) => {
            return await dataSources.comentarioAPI.comentariosByProductoRequest(id_producto);
        },

        comentariosBycliente: async (_, { id_cliente }, {dataSources}) => {
            return await dataSources.comentarioAPI.comentariosByClienteRequest(id_cliente);
        }
    }
};

module.exports = comentarioResolver; 