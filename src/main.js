import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import bootstrap from 'bootstrap/dist/js/bootstrap'
import 'bootstrap/scss/bootstrap.scss'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import 'node-snackbar/dist/snackbar.css'

import './db'

window.bootstrap = bootstrap
window.app = createApp(App).use(router).mount('#app')
