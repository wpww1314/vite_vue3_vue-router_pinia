import { createApp } from 'vue'
import App from './App.vue'

// 引入路由组件
import router from './route/index'

// 引入状态管理组件
import { createPinia } from 'pinia'

// 引入自定义样式文件
import './assets/style/index.scss'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
