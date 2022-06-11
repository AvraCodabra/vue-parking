import { createApp } from 'vue'
import App from './App.vue'
import VueAnalytics from 'vue-analytics';
import router from "router";

createApp(App).mount('#app')

Vue.use(VueAnalytics, {
    id: 'G-DBXTX64G9V',
    router
})