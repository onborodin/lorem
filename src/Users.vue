<template>
    <div id="users" class="grid-container padding-top-2">
        <div class="grid-x grid-padding-x">
            <div class="cell medium-8 medium-centered">

            <p>Users</p>

            </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    data: function() {
        return {}
    },
    methods: {},
    mounted: function() {
        $('#user').foundation()
    }
}
</script>
