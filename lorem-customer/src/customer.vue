<template src="./customer.html"></template>

<script lang="ts">

import { mapState, mapGetters, mapActions } from 'vuex'
import foundation from './foundation'

import { Vue, Component, Prop, Watch } from "vue-property-decorator"

interface Customer {
    id: number
    phone: string
    name: string
    address: string
    total: number
    lastOrder: string
}


@Component
export default class Stock extends Vue {

    buttonText: string = "Push me"

    currentCustomer: Customer = {
            id: 0,
            phone: "",
            name: "",
            address: "",
            total: 0,
            lastOrder: ""
    }
    customers: Customer[] = []

    addCustomer(item: Customer) {
        this.customers.push(item)
    }

    getRandom(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    onCall() {
        this.currentCustomer = this.customers[this.getRandom(0,this.customers.length)]
        this.buttonText = "Push me again, sweety"
    }

    mounted() {
        this.addCustomer({
            id: 8758758,
            phone: "162387363264",
            name: "Jimmy Page",
            address: "Sun str, 17",
            total: 21321,
            lastOrder: "2017-11-11"
        })

        this.addCustomer({
            id: 121321,
            phone: "162387363264",
            name: "Robert Plant",
            address: "Kashmir, 11",
            total: 42343,
            lastOrder: "2016-11-11"
        })

        this.addCustomer({
            id: 32434324,
            phone: "14324324324",
            name: "John Paul Jones",
            address: "Dust str, 2",
            total: 45451,
            lastOrder: "2014-04-11"
        })

        this.addCustomer({
            id: 32434324,
            phone: "19386868755",
            name: "John Bonham",
            address: "Deep inside str, 3",
            total: 13186,
            lastOrder: "2015-04-11"
        })

    }
}

</script>
