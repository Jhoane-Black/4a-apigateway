const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class AuthAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.auth_inv_api_url;
    }

    async loginRequest(credentials){
        return await this.post('/rest-auth/login/', credentials);
    }

    async createUser(userData){
        return await this.post('/rest-auth/registration/', userData);
    }
}

module.exports = AuthAPI;