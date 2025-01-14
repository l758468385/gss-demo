import App from './App.vue'
import Vue from 'vue'
import GSSAnalytics from '@/uni_modules/gss-uniapp'

// 配置 GSS Analytics
Vue.use(GSSAnalytics, {
	traceid: 'lfna-15357687' // 替换为您的追踪ID
	// app_id: 'gss.demo.com', // 可选：自定义应用标识
	// user_id: 'demo-user-123' // 可选：用户ID
})

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()