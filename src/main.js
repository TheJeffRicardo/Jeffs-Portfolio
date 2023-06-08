import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Aos from 'aos'
import "aos/dist/aos.css"

createApp(App).use(store).use(Aos.init()).use(router).mount('#app')
