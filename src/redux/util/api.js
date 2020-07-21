import baseApi from './baseApi'
const url = 'http://localhost:3001'

class Api extends baseApi {
    static getExecutiveProducts = (perPage) => Api.get(`${url}/api/executive`)
    
}

export default Api;