
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoremComponent } from './lorem/lorem.component'
import { SellerComponent } from './seller/seller.component'

const routes: Routes = [
    {
        path: 'seller',
        component: SellerComponent
    },
    {
        path: 'lorem',
        component: LoremComponent
    },
    {
        path: '',
        redirectTo: '/lorem',
        pathMatch: 'full'
    },
    //{ path: '**', component: NotFoundComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
