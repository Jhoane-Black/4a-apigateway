const saleRegisterResolvers = {
    Query: {
        saleRegisterByClient: async (_, { cliente }, {dataSources, userIdToken}) => {
            let response = await dataSources.clienteAPI.clienteByIdRequest(cliente);
            let userId = response.user;
            if(userId == userIdToken) {
                return await dataSources.saleRegisterAPI.saleRegisterByClientRequest(cliente);
            } else {
                return null;
            }    
        },
        saleRegisterByProduct: async (_, { producto }, {dataSources, userIdToken}) => {
            let response = await dataSources.productoAPI.productoByIdRequest(producto);
            let request = await dataSources.proveedorAPI.proveedorByIdRequest(response.proveedor);
            let userId = request.user;

            if(userId == userIdToken) {
                return await dataSources.saleRegisterAPI.saleRegisterByProductRequest(producto);
            } else {
                return null;
            }   
        },
        saleRegisterByClientAndProduct: async (_, {cliente, producto }, {dataSources, userIdToken}) => {
            let response = await dataSources.productoAPI.productoByIdRequest(producto);
            let request = await dataSources.proveedorAPI.proveedorByIdRequest(response.proveedor);
            let userId = request.user;

            if(userId == userIdToken) {
                return await dataSources.saleRegisterAPI.saleRegisterByClientAndProductRequest( cliente, producto);
            } else {
                return null;
            }  
            
        },
        saleRegisterByProvider: async (_, {proveedor }, {dataSources, userIdToken}) => {
            let response = await dataSources.proveedorAPI.proveedorByIdRequest(proveedor);
            let userId = response.user;
            if(userId == userIdToken) {
                return await dataSources.saleRegisterAPI.saleRegisterByProviderRequest(proveedor);
            } else {
                return null;
            }
        },
        saleRegisterById: async (_, {id}, {dataSources, userIdToken}) => {
            return await dataSources.saleRegisterAPI.saleRegisterByIdRequest(id);// Para el delete, me toca pensar cómo cambiarlo
        }
    },
    Mutation: {
        createSaleRegister: async (_, { saleRegister }, {dataSources}) => {
            return await dataSources.saleRegisterAPI.createSaleRegister(saleRegister);
        },
        deleteSaleRegister: async (_, { id }, {dataSources}) => {
            return await dataSources.saleRegisterAPI.deleteSaleRegister(id);
        }
    }
};

module.exports = saleRegisterResolvers;