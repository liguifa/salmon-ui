import Vue from 'vue'
import App from './app.vue'
import router from './router'
import Salmon from "../src/index";

console.log(Salmon)

Vue.use(Salmon);

new Vue({
	router,
  	render: h => h(App)
}).$mount('#app')
