import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';

import { MessagesService } from './messages/services/messages.service';
import { HttpService } from './messages/services/http.service';


@NgModule( {
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ HttpService, MessagesService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {}
