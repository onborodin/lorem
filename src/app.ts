import './app.scss'

import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

//import custom from './custom'


const app = new Vue({
    el: '#app',
    router: router,
    store: store,
    render: function(h) {
                return h(App)
    },
    components: { App }
})

