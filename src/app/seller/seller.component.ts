
import { Component, OnInit, OnDestroy } from '@angular/core';

declare var $ : any;

class DataRecord {
    constructor(
        public id: number,
        public name: string,
        public rate: number,
        public state: string,
        public stateDesc: string,
    ) { }
}

@Component({
    selector: 'seller',
    templateUrl: './seller.component.html',
    styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {

    header = 'Продавцы';
    message = '';
    topRate = 0

    dataRecords = [
        new DataRecord(1, "Борис Рубекин", 0, 'free', 'свободен'),
        new DataRecord(2, "Андрей Светлов", 0, 'free', 'свободен'),
        new DataRecord(3, "Олег Шавкунов", 0, 'free', 'свободен'),
        new DataRecord(4, "Борис Гребенщиков", 0, 'free', 'свободен')
    ];

    ngOnInit() {
        $(document).foundation();
        $("#app").foundation();
        console.log('init');
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
            });

            this.dataRecords = this.dataRecords.sort(function(a, b) {
                        if (a.rate > b.rate) {
                            return 1;
                        }
                        if (a.rate < b.rate) {
                            return -1;
                        }
                        return 0;
            });
    };
}
