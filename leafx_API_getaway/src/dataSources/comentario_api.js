const serverConfig = require('../server');
const { RESTDataSource } = require('apollo-datasource-rest');

class ComentarioAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.auth_inv_api_url;
    }

    async comentarioByIdRequest(id){
        return await this.get(`/inventario/comentario/${id}/`);
    }

    async comentariosByProductoRequest(id_producto){
        return await this.get(`/inventario/resumen/producto/${id_producto}/`);
    }

    async comentariosByClienteRequest(id_cliente){
        return await this.get(`/inventario/resumen/cliente/${id_cliente}/`);
    }

    async createComentario(comentarioData){
        return await this.post(`/inventario/comentario/`, comentarioData)
    }

    async updateComentario(id, comentarioData){
        return await this.put(`/inventario/comentario/${id}/`, comentarioData);
    }

    async deleteComentario(id){
        return await this.delete(`/inventario/comentario/${id}/`);
    }
}

module.exports = ComentarioAPI;