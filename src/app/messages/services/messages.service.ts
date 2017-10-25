import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import * as io from 'socket.io-client';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessagesService extends HttpService {
  socket;

  constructor( private http: Http ) {
    super( http );

    const REAL_TIME_SERVER_HOST = 'http://polls-api.webtraining.zone'; // 'http://localhost';
    const REAL_TIME_SERVER_PORT = 3300;
    const REAL_TIME_SERVER_URL = `${REAL_TIME_SERVER_HOST}:${REAL_TIME_SERVER_PORT}/`;

    this.socket = io( REAL_TIME_SERVER_URL );
  }

  sendMessage( message: string ) {
    console.log( 'Sending message: ', message );
    this.socket.emit( 'new-message', message );
  }

  getRealTimeMessages(): Observable<any> {
    return new Observable( observer => {
      this.socket.on( 'message-received', ( data ) => {
        observer.next( data );
      } );
      return () => {

      };
    } );
  }

}
