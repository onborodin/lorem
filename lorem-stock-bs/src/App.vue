<template>
    <div id="page">
        <div class="navbar sticky-top navbar-expand-sm navbar-light bg-light mb-4 nav-justified">
            <div class="navbar-text"><span class="navbar-toggler-icon"></span>NgII</div>

                    <router-link class="nav-link" active-class="active" to="/stock">Stock</router-link>

            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-item nav-link" href="/logout">Logout</a>
                </li>
            </ul>

        </div>

        <div id="router">
                <router-view />
        </div>


        <div id="seller" class="container">
            <div class="row justify-content-center">
                <div class="col-sm-9 ">
                    <hr/>
                </div>
            </div>
        </div>

</div>

</template>

<script lang="ts">

import Stock from './Stock.vue'
import NotFound from './NotFound.vue'

import { Vue, Component, Prop } from "vue-property-decorator"

@Component({
    components: { Stock, NotFound }
})
export default class App extends Vue {

}
</script>


<style>
html {
    font-size: 90% !important;
}
</style>
