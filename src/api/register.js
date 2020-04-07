/*
接口调用；
1：安装axios   npm i axios
2:导入axios    import axios from 'axios
3:使用axios调用接口
*/

import axios from 'axios'
function getPhoneCode(data) {
    return axios({
        url: process.env.VUE_APP_URL + "/sendsms",
        method: "post",
        data: data,
        withCredentials: true //跨域照样协带cookie
    })
}
export default getPhoneCode 