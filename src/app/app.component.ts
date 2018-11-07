import {
    Component
} from '@angular/core';
import {
    DataRecord
} from './data-record';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    header = 'Продавцы';
    message = '';
    topRate = 0

    dataRecords = [
        new DataRecord(1, "Борис Рубекин", 0, 'free', 'свободен'),
        new DataRecord(2, "Андрей Светлов", 0, 'free', 'свободен'),
        new DataRecord(3, "Олег Шавкунов", 0, 'free', 'свободен')
    ];

    setStyle(index: number) : object {
        if (index == 0) return {'color' : 'red' }
        if (index == 1) return {'color' : 'green' }
        console.log(index)
    }

    setButton(item) {
        if (item.state === 'free') return ['button', 'success']
        if (item.state === 'busy') return ['button', 'warning']
        return ['button']
    }

    upRate(item) {
            this.dataRecords.forEach((elem) => {

                    if (item.id === elem.id) {
                        if (elem.state === 'free') { 
                            this.topRate += 1
                            elem.state = 'busy'
                            elem.stateDesc = 'занят'
                            elem.rate += 2
                        }
                        else if (elem.state === 'busy') {
                            elem.state = 'free'
                            elem.stateDesc = 'свободен'
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

