/*
接口调用；
1：安装axios   npm i axios
2:导入axios    import axios from 'axios
3:使用axios调用接口
*/

import axios from 'axios'
import { Message } from 'element-ui';
var instance = axios.create({
    baseURL: process.env.VUE_APP_URL,   //设置基地址
    withCredentials: true //跨域照样协带cookie
});
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.data.code == 200) {
        // 因为返回数据里面axios帮我们额外的包了一层data但实际我们基本不用，所以我们把它干掉
        return response.data;
    } else {
        // 提示用户错误
        // 出错了我们还有必要返回数据出去吗？
        //抛出一个错误，不要让后面代码执行
        //只要return了一个Promise.reject("error")后面的接口的.then就不会执行了
        Message.error(response.data.message)
        return Promise.reject("error");
    }
    // switch (response.data.code) {
    //     case 200:
    //         return response;
    //     case 201:

    //         Message.error(response.data.message)
    //         // 出错了我们还有必要返回数据出去吗？
    //         //抛出一个错误，不要让后面代码执行
    //         window.console.log("抛错误前处理:", response)
    //         return Promise.reject("error");

    // }

    // return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


function getPhoneCode(data) {
    return instance({
        url: "/sendsms",
        method: "post",
        data      //data: data   
    })
}

function register(data) {
    return instance({
        url: "/register",
        method: "post",
        data      //data: data   
    })
}

// export default getPhoneCode
// export default我们看不出来页面用了些什么接口，它一个js只能使用一个export default
//
export { getPhoneCode, register }