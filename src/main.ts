import { createApp } from 'vue'

import './assets/css/reset.css' //reset样式
import './assets/css/style.css' //全局样式
import 'element-plus/dist/index.css' //element-plus样式
import "vue-prism-editor/dist/prismeditor.min.css"; //代码块样式
import "prismjs/themes/prism-tomorrow.min.css"; //代码高亮样式


import App from './App.vue'
import Router from './router' //路由
import ElementPlus from 'element-plus' //element-plus
import Axios from 'axios' //axios
import VueAxios from 'vue-axios' //vue-axios


const app = createApp(App)

app.use(Router)
app.use(ElementPlus)
app.use(VueAxios, Axios)


app.mount('#app')
