import axios from 'axios';
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API,

    timeout: 15000 // request timeout
})
service.interceptors.request.use(
    config => {
        //   if (sessionStorage.getItem('token')) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        //     config.headers.token = sessionStorage.getItem('token')
        //   }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// http request 拦截器
service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        console.log(error)
    }
)

// 将axios 的 post 方法
export function $post(params) {
    return new Promise((resolve, reject) => {
        service.post(params.url, params.data).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

// 将axios 的 get 方法
export function $get(params) {
    return new Promise((resolve, reject) => {
        service.get(params.url, {
            params: params.data
        }).then(res => {
            resolve(res.data) // 返回请求成功的数据 data
        }).catch(err => {
            reject(err)
        })
    })
}

export default service