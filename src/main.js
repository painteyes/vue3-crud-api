import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"

// createApp(App).use(router).mount('#app')

const app = createApp(App)

// app.config.errorHandler = () => null;
app.config.warnHandler = () => null;

app.use(router).mount('#app')