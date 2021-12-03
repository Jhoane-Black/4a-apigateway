const proveedorResolver = {
    Query: {
        proveedorById: async (_, { id }, {dataSources, userIdToken}) => {
            let response = await dataSources.proveedorAPI.proveedorByIdRequest(id);
            let userId = response.user;
            if(userId == userIdToken) {
                return response; 
            } else {
                return null;
            }               
        },

        MisProveedores: async (_, {}, {dataSources, userIdToken}) => {
            if(userIdToken != null){
                return await dataSources.proveedorAPI.proveedoresByUserRequest(userIdToken);
            } else {
                return null;
            }
        }
    },

    Mutation: {
        createProveedor: async (_, { proveedorData }, {dataSources, userIdToken}) => {
            //Creating Proveedor
            if(userIdToken != null){
                const createProveedorData = {
                    nombre: proveedorData.nombre,
                    direccion: proveedorData.direccion,
                    nit: proveedorData.nit,
                    user: userIdToken
                }

                return await dataSources.proveedorAPI.createProveedor(createProveedorData);
            } else {
                return null;
            }
        },

        updateProveedor: async (_, {proveedorData}, {dataSources, userIdToken}) => {
            let response = await dataSources.proveedorAPI.proveedorByIdRequest(proveedorData.id);
            let userId = response.user;
            if(userId == userIdToken) {
                const updateProveedorData = {
                    nombre: proveedorData.nombre,
                    direccion: proveedorData.direccion,
                    nit: proveedorData.nit,
                    user: userIdToken
                }
                
                return await dataSources.proveedorAPI.updateProveedor(proveedorData.id, updateProveedorData);
            } else {
                return null;
            }    
        },

        deleteProveedor: async (_, {id}, {dataSources, userIdToken}) => {
            let request = await dataSources.proveedorAPI.proveedorByIdRequest(id);
            let userId = request.user;
            if(userId == userIdToken) {
                await dataSources.proveedorAPI.deleteProveedor(id);
                return "Proveedor eliminado";
            } else {
                return null;
            }
        }


    }
};

module.exports = proveedorResolver;