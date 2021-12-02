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
        }
    }
};

module.exports = proveedorResolver;