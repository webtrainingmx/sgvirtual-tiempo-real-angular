import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessagesService } from './services/messages.service';

@Component( {
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: [ './messages.component.css' ]
} )
export class MessagesComponent implements OnInit, OnDestroy {
  message;
  messages = [];
  connectionToRealTimeService;

  constructor( private _messagesService: MessagesService ) { }

  ngOnInit() {
    this.connectionToRealTimeService = this._messagesService.getRealTimeMessages().subscribe( message => {
      console.log( 'Mensaje recibido por Angular', message );
      this.messages.push( message );
    } );
  }

  sendMessage() {
    this._messagesService.sendMessage( this.message );
    this.message = '';
  }

  ngOnDestroy() {
    this.connectionToRealTimeService.unsubscribe();
  }
}
