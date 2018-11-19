import Vue from 'vue'
import Router from 'vue-router'

import Users from './Users.vue'
import NotFound from './NotFound.vue'
import Lorem from './Lorem.vue'

import store from './store'

Vue.use(Router)

var router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/lorem'
        },
        {
            path: '/users',
            component: Users
        },
        {
            path: '/lorem',
            component: Lorem
        },
        {
            path: '*',
            component: NotFound,
        }
    ]
})

export default router
