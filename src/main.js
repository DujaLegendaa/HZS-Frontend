import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import NavBar from './components/NavBar.vue'

const app = createApp(App)

app.component('topnav', NavBar)

app.use(Quasar, quasarUserOptions).use(store).use(router).mount('#app')
