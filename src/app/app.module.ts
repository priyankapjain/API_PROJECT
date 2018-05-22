import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppServiceService } from './app-service.service';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
@NgModule({
  declarations: [
    AppComponent,
    DetailComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule ,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
