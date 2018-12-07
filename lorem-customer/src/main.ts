import './app.scss'

import Vue from 'vue'
import App from './app.vue'

import router from './router'
import store from './store'

const app = new Vue({
    el: '#app',
    router: router,
    store: store,
    render: function(h) {
                return h(App)
    },
    components: { App }
})

import foundation from './foundation'

foundation(document)
