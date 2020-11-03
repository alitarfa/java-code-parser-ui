import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {CallGraphService} from "./call-graph.service";
import {map, takeUntil} from "rxjs/operators";
import * as jQuery from 'jquery';
import * as joint from 'jointjs';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-call-graph',
  templateUrl: './call-graph.component.html',
  styleUrls: ['./call-graph.component.scss']
})
export class CallGraphComponent implements OnInit {

  private unsubscribe: Subject<void> = new Subject<void>();
  public loading: boolean = false;
  public formGroup: FormGroup;

  constructor(private callGraphService: CallGraphService) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      projectPath: new FormControl('', [Validators.required])
    })
  }

  public callGraph() {
    if (this.formGroup.valid) {
      this.loading = true;
      const dataMap = new Map();
      this.callGraphService.callGraph(this.formGroup.controls['projectPath'].value)
        .pipe(takeUntil(this.unsubscribe))
        .pipe(
          map(res => res.body))
        .subscribe(value => {
          Object.keys(value).forEach((key: Extract<keyof typeof value, string>) => {
            const item = value[key]
            const mapKey = Object.keys(item);
            const mapValue = Object.values(item);
            dataMap.set(mapKey[0], mapValue[0]);
          })
          this.constructGraph(dataMap);
          this.loading = false;
        });
    }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private constructGraph(graphData) {
    const graph = this.initGraph();
    const m2 = new Map();

    for (const [k, v] of graphData.entries()) {
      let rect = null;
      let rect2 = null;

      if (!m2.get(k)) {
        rect = new joint.shapes.basic.Rect({
          position: {x: 100, y: 30},
          size: {width: 120, height: 40},
          attrs: {
            rect: {fill: '#424242', "stroke-width": '0'},
            text: {text: k, fill: 'white'}
          }
        });
        m2.set(k, rect);
      } else {
        rect = m2.get(k);
      }

      if (!m2.get(v)) {
        rect2 = new joint.shapes.basic.Rect({
          position: {x: 100, y: 30},
          size: {width: 100, height: 30},
          attrs: {rect: {fill: '#424242', "stroke-width": '0'}, text: {text: v, fill: 'white'}}
        });
        rect2.translate(300);
        m2.set(v, rect2);
      } else {
        rect2 = m2.get(v);
      }
      rect.addTo(graph);
      rect2.addTo(graph);
      let link = new joint.shapes.standard.Link({
        attrs: {line: {stroke: 'black', 'stroke-width': 1}}
      });
      link.source(rect);
      link.target(rect2);
      link.addTo(graph);

    }
  }

  private initGraph() {
    let graph = new joint.dia.Graph;
    let paper = new joint.dia.Paper({
      el: jQuery("#paper"),
      width: 3000,
      height: 3000,
      model: graph,
      gridSize: 1
    });
    return graph;
  }
}