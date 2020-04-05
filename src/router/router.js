
/*
/*路由基本使用
1：安装vue-router   npm i vue-router
2:导入vue-router    import VueRouter from 'vue-router'
3:注册              Vue.use(VueRouter)
4:实例化VueRouter   const router=new VueRouter({routes:[//写相应的路由配制]})
   输出 该路由实例化对象   export default router
5：注入到vue实例   
   导入路由实例化对象
   import router from "路径"
   new Vue({router})  
6:来一个路由出口   router-view

*/
// 导入路由
import VueRouter from "vue-router"
// 导入登陆组件
import login from '@/view/login/login.vue'
// 注册
import Vue from 'vue'
Vue.use(VueRouter)
// 实例化
const router = new VueRouter({
    // 路由配制
    routes: [
        {
            path: "/",
            component: login
        }
    ]
})
// 输出 出去
export default router











