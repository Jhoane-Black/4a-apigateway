const serverConfig = require('../server');
const {RESTDataSource} = require('apollo-datasource-rest');

class SaleRegisterAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.sale_register_api_url;
    }
    async saleRegisterByClientRequest(cliente){
        return await this.get(`/saleregistersc/${cliente}`);
    }
    async saleRegisterByProductRequest(producto){
        return await this.get(`/saleregistersp/${producto}`);
    }
    async saleRegisterByClientAndProductRequest(cliente, producto){
        return await this.get(`/saleregisterscp/${cliente}/${producto}`);
    }
    async saleRegisterByProviderRequest(proveedor){
        return await this.get(`/saleregisterspv/${proveedor}`);
    }
    async saleRegisterByIdRequest(registerID){
        return await this.get(`/saleregisters/${registerID}`);
    }
    async createSaleRegister(saleRegister){
        return await this.post('/saleregister/', saleRegister);
    }
    async deleteSaleRegister(id){
        return await this.delete(`/saleregister/${id}`);
    }
}

module.exports = SaleRegisterAPI;
