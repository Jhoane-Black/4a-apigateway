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
            let saleData = await dataSources.saleRegisterAPI.saleRegisterByIdRequest(id);
            id_cliente = saleData.cliente;
            id_proveedor = saleData.proveedor;

            let clienteData = await dataSources.clienteAPI.clienteByIdRequest(id_cliente);
            let proveedorData = await dataSources.proveedorAPI.proveedorByIdRequest(id_proveedor);

            user_id_cliente = clienteData.user;
            user_id_proveedor = proveedorData.user;
            
            if(user_id_cliente == userIdToken || user_id_proveedor == userIdToken){
                return saleData;
            } else {
                return null;
            }
                
        }
    },
    Mutation: {
        createSaleRegister: async (_, { saleRegister }, {dataSources, userIdToken}) => {
            let clienteData = await dataSources.clienteAPI.clienteByIdRequest(saleRegister.cliente);
            let user_id =  clienteData.user;
            
            if(user_id == userIdToken){
                let productData = await dataSources.productoAPI.productoByIdRequest(saleRegister.producto);
                let id_proveedor = productData.proveedor;
                let precio = productData.precio;

                let saleData = {
                    cliente: saleRegister.cliente,
                    proveedor: id_proveedor,
                    producto: saleRegister.producto,
                    cantidad: saleRegister.cantidad,
                    precio: precio,
                    fecha: saleRegister.fecha
                }

                return await dataSources.saleRegisterAPI.createSaleRegister(saleData);
            } else {
                return null;
            }
        },
        deleteSaleRegister: async (_, { id }, {dataSources, userIdToken}) => {
            let saleData = await dataSources.saleRegisterAPI.saleRegisterByIdRequest(id);
            id_cliente = saleData.cliente;
            id_proveedor = saleData.proveedor;

            let clienteData = await dataSources.clienteAPI.clienteByIdRequest(id_cliente);
            let proveedorData = await dataSources.proveedorAPI.proveedorByIdRequest(id_proveedor);

            user_id_cliente = clienteData.user;
            user_id_proveedor = proveedorData.user;
            
            if(user_id_cliente == userIdToken || user_id_proveedor == userIdToken){
                await dataSources.saleRegisterAPI.deleteSaleRegister(id);
                return "Registro de venta eliminado";
            } else {
                return null;
            }            
        }
    }
};

module.exports = saleRegisterResolvers;