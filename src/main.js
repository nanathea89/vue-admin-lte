import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ContentHeader from './components/ContentHeader.vue'
import ContentApp from './components/ContentApp.vue'
const app = createApp(App)
app.component('content-header',ContentHeader)
app.component('content-app',ContentApp)
app.use(store).use(router).mount('#app')
