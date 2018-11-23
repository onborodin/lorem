<template>
    <div id="page" >
        <div class="top-bar-container" data-sticky-container>
            <div class="sticky sticky-topbar" data-sticky data-options="anchor: page; marginTop: 0; stickyOn: small;">

                <div class="top-bar">
                    <div class="top-bar-left">
                        <ul class="menu">
                            <li class="menu-text"><i class="menu-icon-2"></i>VuT</li>
                            <li><router-link to="/users">Users</router-link></li>
                            <li><router-link to="/lorem">Lorem</router-link></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

        <div class="margin-left-2 margin-right-2">
            <router-view />
        </div>

        <div class="grid-container">
            <div class="grid-x grid-margin-x align-center">
                <div class="cell medium-10">
                    <hr />
                    <p class="text-center">
                        <small>Made by <a href="http://wiki.unix7.org">Borodin Oleg</a></small>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">


import Users from './Users.vue'
import NotFound from './NotFound.vue'
import Lorem from './Lorem.vue'

import { Vue, Component, Prop } from "vue-property-decorator"

@Component({
    components: { Users, NotFound, Lorem }
})
export default class App extends Vue {

}
</script>

<style>
html {
    font-size: 90% !important;
}
</style>
