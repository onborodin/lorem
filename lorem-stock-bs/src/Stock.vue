<template>

<div id="seller" class="container">
    <div class="row justify-content-center">
        <div class="col-sm-9 ">



                <h5>Stock</h5>
                <table class="table table-striped table-hover table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>pn</th>
                            <th>name</th>
                            <th>count</th>
                            <th>cost</th>
                            <th>to order</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in stock">
                            <td>{{ index }}</td>
                            <td>{{ item.pn }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.count }}</td>
                            <td>{{ item.cost }}</td>
                            <td><button class="btn btn-primary" v-on:click="addOrder(item, index)">to order</button></td>

                        </tr>
                    </tbody>

                </table>


                <h5>Order</h5>

                <table class="table  table-striped table-hover table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>pn</th>
                            <th>name</th>
                            <th>count</th>
                            <th>cost</th>
                            <th>sum</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in order">
                            <td>{{ index }}</td>
                            <td>{{ item.pn }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.count }}</td>
                            <td>{{ item.cost }}</td>
                            <td>{{ item.cost * item.count }}</td>
                        </tr>
                    </tbody>

                </table>
                <h5>Total price: {{ sum }}</h5>

            </div>
        </div>
</div>


</template>

<script lang="ts">

import { mapState, mapGetters, mapActions } from 'vuex'

import { Vue, Component, Prop, Watch } from "vue-property-decorator"

interface stockItem {
    id: number
    pn: string
    name: string
    count: number
    cost: number
}


@Component
export default class Stock extends Vue {

    stock : stockItem[] = []
    order : stockItem[] = []
    sum: number = 0

    addStock(item : stockItem) {
        this.stock.push(item)
    }

    addOrder(stockItem : stockItem, index : number) {

        if(this.stock[index].count > 0) {

            let orderItem = Object.assign({}, stockItem)
            orderItem.count = 1

            let i = this.order.findIndex((item : stockItem) => {
                return item.id === orderItem.id
            })

            console.log(i)

            if ( i >= 0) 
                this.order[i].count += 1
            else
                this.order.push(orderItem)

            this.sum = 0
            this.order.forEach((item) => {
                this.sum += item.count * item.cost
            })

            this.stock[index].count -= 1
        }
    }

    mounted() {
        this.addStock({
            id: 0,
            pn: "SN189",
            name: "GoodsN",
            count: 3,
            cost: 12

        })
        this.addStock({
            id: 1,
            pn: "SN832",
            name: "GoodsA",
            count: 7,
            cost: 46
        })

        this.addStock({
            id: 2,
            pn: "SN652",
            name: "GoodsB",
            count: 4,
            cost: 4
        })
    }
}

</script>
