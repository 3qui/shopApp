import axios from "axios";

const service = axios.create({
    timeout: 15000   //请求超时时间
})

const withAxios = apiConfig => {
    const serviceMap = {};
    apiConfig.map(({name,url,method}) => {
        serviceMap[name] = function(data = {}){
            let key = "params";
            if(method === "post" || method === "put"){
                key = "data"
            }
            return service({
                method,
                url:url,
                [key]:data
            })
        }
    })
    return serviceMap
    
}

export default withAxios
