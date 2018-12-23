import request from "@/api/http";

const requestType = {
    requestGet: function (apiUrl, params) {
        return request({
            url: apiUrl,
            method: 'get',
            params: params || ''
        })
    },
    requestPost: function (apiUrl, data) {
        return request({
            url: apiUrl,
            method: 'post',
            data: data
        })
    }
}

export default requestType;