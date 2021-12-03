const serverConfig = require('../server');
const { RESTDataSource } = require('apollo-datasource-rest');

class ProductoAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.auth_inv_api_url;
    }

    async productoByIdRequest(id){
        return await this.get(`/inventario/producto/${id}/`);
    }

    async productosByProveedorRequest(id_proveedor){
        return await this.get(`/inventario/resumen/proveedor/${id_proveedor}/`);
    }

    async createProducto(productoData){
        return await this.post(`/inventario/producto/`, productoData)
    }

    async updateProducto(id, productoData){
        return await this.put(`/inventario/producto/${id}/`, productoData);
    }

    async deleteProducto(id){
        return await this.delete(`/inventario/producto/${id}/`);
    }
}

module.exports = ProductoAPI;