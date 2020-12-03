import {Injectable} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {BehaviorSubject} from "rxjs";

export interface Steps {
  init: boolean;
  pack: boolean;
  dep: boolean;
  view: boolean;
  fin: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class WebsocketConfService {
  url_ws = "ws://localhost:8080/socket";
  ws: any;
  socket: any;

  public parsingSubject = new BehaviorSubject<Steps>(null);

  constructor() {
    this.initWebSocket();
  }

  private initWebSocket() {
    this.socket = new WebSocket(this.url_ws);
    this.ws = Stomp.over(this.socket);
  }

  public connect() {
    let that = this;
    this.ws.connect({}, function (frame) {
      that.ws.subscribe("/parsing-steps", function (message) {
        that.parsingSubject.next(JSON.parse(message.body));
      });
    }, function (error) {
      console.log("STOMP error " + error)
    });
  }

  public disconnect() {
    if (this.ws != null) {
      this.ws.ws.close();
    }
    console.log("Disconnected");
  }

  //this.ws.send("/app/message", {}, data);
}
