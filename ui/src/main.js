import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'


//Pour fontawesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEnvelope, faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faEnvelope, faUserSecret)   //Liste de toutes icones utilisees

//Fin fontawesome

const app = createApp(App)

app.use(createPinia().use(piniaPluginPersistedstate))

app.use(router)

// app.mount('#app')
app.component('FontAwesomeIcon', FontAwesomeIcon).mount('#app')
