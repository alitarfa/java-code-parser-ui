import {Component, OnInit} from '@angular/core';
import {WebsocketConfService} from "./core/websocket/websocket-conf.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private webSocket: WebsocketConfService) {
  }

  ngOnInit(): void {
    this.webSocket.connect();
  }
}
