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

    async proveedoresByUserRequest(id){
        return await this.get(`/inventario/resumen/user/proveedores/${id}/`)
    }

    async createProveedor(proveedorData){
        return await this.post(`/inventario/proveedor/`, proveedorData)
    }

    async updateProveedor(id, proveedorData){
        return await this.put(`/inventario/proveedor/${id}/`, proveedorData);
    }

    async deleteProveedor(id){
        return await this.delete(`/inventario/proveedor/${id}/`);
    }
}

module.exports = ProveedorAPI;