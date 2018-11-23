import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoremComponent } from './lorem/lorem.component';
import { SellerComponent } from './seller/seller.component';

@NgModule({
  declarations: [
    AppComponent,
    LoremComponent,
    SellerComponent
  ],

  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
