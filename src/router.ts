import Vue from 'vue'
import Router from 'vue-router'

import Stock from './Stock.vue'
import NotFound from './NotFound.vue'

import store from './store'

Vue.use(Router)

var router  = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/stock'
        },
        {
            path: '/stock',
            component: Stock
        },
        {
            path: '*',
            component: NotFound,
        }
    ]
})

export default router
