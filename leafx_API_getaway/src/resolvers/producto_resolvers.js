const productoResolver = {
    Query: {
        productoByid: async (_, { id }, {dataSources}) => {
            return await dataSources.productoAPI.productoByIdRequest(id);
        },

        productosByproveedor: async (_, { id_proveedor }, {dataSources}) => {
            return await dataSources.productoAPI.productosByProveedorRequest(id_proveedor);
        }
    },

    Mutation: {
        createProducto: async (_, { productoData }, {dataSources, userIdToken}) => {
            //Creating Producto
            let request = await dataSources.proveedorAPI.proveedorByIdRequest(productoData.proveedor);
            let userId = request.user;

            if(userIdToken == userId){
                const createProductoData = {
                    nombre: productoData.nombre,
                    precio: productoData.precio,
                    stock: productoData.stock,
                    proveedor: productoData.proveedor
                }

                return await dataSources.productoAPI.createProducto(createProductoData);
            } else {
                return null;
            }
        },

        updateProducto: async (_, {productoData}, {dataSources, userIdToken}) => {
            let response = await dataSources.productoAPI.productoByIdRequest(productoData.id);
            let request = await dataSources.proveedorAPI.proveedorByIdRequest(response.proveedor);
            let userId = request.user;

            if(userId == userIdToken) {
                const updateProductoData = {
                    nombre: productoData.nombre,
                    precio: productoData.precio,
                    stock: productoData.stock,
                    proveedor: productoData.proveedor
                }
                
                return await dataSources.productoAPI.updateProducto(productoData.id, updateProductoData);
            } else {
                return null;
            }    
        },

        deleteProducto: async (_, {id}, {dataSources, userIdToken}) => {
            let response = await dataSources.productoAPI.productoByIdRequest(id);
            let request = await dataSources.proveedorAPI.proveedorByIdRequest(response.proveedor);
            let userId = request.user;

            if(userId == userIdToken) {
                await dataSources.productoAPI.deleteProducto(id);
                return "Producto eliminado";
            } else {
                return null;
            }
        }


    }
};

module.exports = productoResolver;  