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
    },

    Mutation: {
        createComentario: async (_, { comentarioData }, {dataSources, userIdToken}) => {
            //Creating Comentario
            let request = await dataSources.clienteAPI.clienteByIdRequest(comentarioData.cliente);
            let userId = request.user;

            if(userIdToken == userId){
                const createComentarioData = {
                    calificacion: comentarioData.calificacion,
                    comentario: comentarioData.comentario,
                    creacion: comentarioData.creacion,
                    producto: comentarioData.producto,
                    cliente: comentarioData.cliente
                }

                return await dataSources.comentarioAPI.createComentario(createComentarioData);
            } else {
                return null;
            }
        },

        updateComentario: async (_, {comentarioData}, {dataSources, userIdToken}) => {
            let response = await dataSources.comentarioAPI.comentarioByIdRequest(comentarioData.id);
            let request = await dataSources.clienteAPI.clienteByIdRequest(response.cliente);
            let userId = request.user;

            if(userId == userIdToken) {
                const updateComentarioData = {
                    calificacion: comentarioData.calificacion,
                    comentario: comentarioData.comentario,
                    creacion: comentarioData.creacion,
                    producto: comentarioData.producto,
                    cliente: comentarioData.cliente
                }
                
                return await dataSources.comentarioAPI.updateComentario(comentarioData.id, updateComentarioData);
            } else {
                return null;
            }    
        },

        deleteComentario: async (_, {id}, {dataSources, userIdToken}) => {
            let response = await dataSources.comentarioAPI.comentarioByIdRequest(id);
            let request = await dataSources.clienteAPI.clienteByIdRequest(response.cliente);
            let userId = request.user;

            if(userId == userIdToken) {
                await dataSources.comentarioAPI.deleteComentario(id);
                return "Comentario eliminado";
            } else {
                return null;
            }
        }


    }
};

module.exports = comentarioResolver; 