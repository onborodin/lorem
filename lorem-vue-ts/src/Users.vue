<template>
    <div id="lorem" class="grid-container">
        <div class="grid-x grid-margin-x align-center">
            <div class="cell medium-8">

                <h5>{{ header }}</h5>

                <table>

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>имя</th>
                            <th>рейтинг</th>
                            <th>состояние</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(item, index) in dataRecords">
                            <td>{{ index }}</td>
                            <td><span v-bind:style="setStyle(index)">{{ item.name }}</span></td>
                            <td>{{ item.rate }}</td>
                            <td><a class="button" v-on:click="upRate(item)" v-bind:class="setButton(item)"  >{{ item.stateDesc }}</a></td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { mapState, mapGetters, mapActions } from 'vuex'
import foundation from './foundation'

import { Vue, Component, Prop } from "vue-property-decorator"

class DataRecord {
    constructor(
        public id: number,
        public name: string,
        public rate: number,
        public state: string,
        public stateDesc: string,
    ) {}
}

@Component
export default class Users extends Vue {

    header: string = 'Продавцы'
    message: string = ''
    topRate: number = 0

    dataRecords = [
        new DataRecord(1, "Борис Рубекин", 0, 'free', 'свободен'),
        new DataRecord(2, "Андрей Светлов", 0, 'free', 'свободен'),
        new DataRecord(3, "Олег Шавкунов", 0, 'free', 'свободен'),
        new DataRecord(4, "Борис Гребенщиков", 0, 'free', 'свободен')
    ];

    mounted() : void {
        foundation('#user')
        console.log('Users mounted')
    }

    setStyle(index: number) : object {
        if (index == 0) return {'color' : 'red' }
        if (index == 1) return {'color' : 'green' }
        return {}
    }

    setButton(item: DataRecord) : any {
        if (item.state === 'free') return ['button', 'success']
        if (item.state === 'busy') return ['button', 'warning']
        return ['button']
    }

    upRate(item: DataRecord) : void {
            this.dataRecords.forEach((elem) => {

                    if (item.id === elem.id) {
                        if (elem.state === 'free') { 
                            this.topRate += 1
                            elem.state = 'busy'
                            elem.stateDesc = 'занят'
                            elem.rate += 4
                        }
                        else if (elem.state === 'busy') {
                            elem.state = 'free'
                            elem.stateDesc = 'свободен'
                            elem.rate -= 2
                        }
                    }
            })

            this.dataRecords = this.dataRecords.sort(function(a, b) {
                        if (a.rate > b.rate) {
                            return 1
                        }
                        if (a.rate < b.rate) {
                            return -1
                        }
                        return 0
            })
    }

}
</script>
