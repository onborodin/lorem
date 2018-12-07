import Vue from 'vue'
import Router from 'vue-router'

import Customer from './customer.vue'
import NotFound from './not-found.vue'

import store from './store'

Vue.use(Router)

var router  = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Customer
        },
        {
            path: '*',
            component: NotFound,
        }
    ]
})

export default router
