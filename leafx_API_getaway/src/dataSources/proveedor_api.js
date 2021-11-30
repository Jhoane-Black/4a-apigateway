const serverConfig = require('../server');
const { RESTDataSource } = require('apollo-datasource-rest');

class ProveedorAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.auth_inv_api_url;
    }

    async proveedorByIdRequest(id){
        return await this.get(`/inventario/proveedor/${id}/`);
    }

    async createProveedor(proveedorData){
        return await this.post(`/inventario/proveedor/`, proveedorData)
    }
}

module.exports = ProveedorAPI;