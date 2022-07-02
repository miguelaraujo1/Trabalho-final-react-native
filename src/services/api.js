import axios from "axios";

const api = axios.create({
    baseURL: "https://tegloja-api.herokuapp.com/"
})

export default api

// Documentação Swagger:
// tegloja-api.herokuapp.com/swagger-ui/index.html#/

