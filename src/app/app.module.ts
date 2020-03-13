import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApinutriComponent } from './apinutri/apinutri.component';
import { ApipostComponent } from './apipost/apipost.component';

@NgModule({
  declarations: [
    AppComponent,
    ApinutriComponent,
    ApipostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
