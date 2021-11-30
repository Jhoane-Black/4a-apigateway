const serverConfig = require('../server');
const { RESTDataSource } = require('apollo-datasource-rest');

class ClienteAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.auth_inv_api_url;
    }

    async clienteByIdRequest(id){
        return await this.get(`/inventario/cliente/${id}/`);
    }

    async createCliente(clienteData){
        return await this.post(`/inventario/cliente/`, clienteData)
    }
}

module.exports = ClienteAPI;