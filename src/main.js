import Vue from 'vue'
import App from './App.vue'
// 导入element插件
import ElementUI from 'element-ui';
// 导入element的css
import 'element-ui/lib/theme-chalk/index.css';

// 注册elementui
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
