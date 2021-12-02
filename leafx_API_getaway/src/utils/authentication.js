const fetch = require('node-fetch');
const serverConfig = require('../server')
const { ApolloError } = require('apollo-server');


const authentication = async ({ req }) => {
    const token = req.headers.authorization || '';
    if(token == ''){
        return { userIdToken: null}
    }else{
        try{
            let requestOptions = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json" ,
                    "Authorization": "token " + token
                },
                redirect: "follow"
            }
            let response = await fetch(`${serverConfig.auth_inv_api_url}/inventario/user/`, requestOptions);
            if(response.status != 200){
                console.log(response)
                throw new ApolloError("Token invalido", 401)
            }
            return  { userIdToken: (await response.json()).id };
        }catch(error){
            console.log(error)
            throw new ApolloError("Error inesperado", 500)
        }
    }
}

module.exports = authentication;