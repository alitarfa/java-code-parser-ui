import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {MatHorizontalStepper} from "@angular/material/stepper";
import {Steps, WebsocketConfService} from "../core/websocket/websocket-conf.service";

@Component({
  selector: 'app-parsing-project',
  templateUrl: './parsing-project.component.html',
  styleUrls: ['./parsing-project.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class ParsingProjectComponent implements OnInit {
  isLinear = false;
  @ViewChild(MatHorizontalStepper) private matHorizontalStepper;
  webSocket$: any;
  public steps: Steps;

  constructor(private webSocket: WebsocketConfService) {
  }

  ngOnInit() {
    this.webSocket.parsingSubject.subscribe(result => {
      if (!!result) {
        this.steps = result;
      }
    })
  }

}
