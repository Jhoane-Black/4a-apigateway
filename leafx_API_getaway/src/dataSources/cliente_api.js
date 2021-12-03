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

    async clientesByUserRequest(id){
        return await this.get(`/inventario/resumen/user/clientes/${id}/`);
    }

    async createCliente(clienteData){
        return await this.post(`/inventario/cliente/`, clienteData);
    }

    async updateCliente(id, clienteData){
        return await this.put(`/inventario/cliente/${id}/`, clienteData);
    }

    async deleteCliente(id){
        return await this.delete(`/inventario/cliente/${id}/`);
    }
}

module.exports = ClienteAPI;