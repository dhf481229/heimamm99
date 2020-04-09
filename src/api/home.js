import instance from '@/utils/request.js'
function getUserInfo(params) {
    return instance({
        url: "/info",
        method: "get",
        // 注意点get请求是用params这个参数
        params      //params: params   
    })
}
export { getUserInfo }