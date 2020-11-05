import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CallGraphService} from "../call-graph/call-graph.service";
import {ToastService} from "../core/toast/toast.service";
import {map, takeUntil} from "rxjs/operators";
import * as joint from "jointjs";
import {randomPlace} from "../core/utils/Utils";
import * as jQuery from "jquery";
import {DependencyService} from "./dependency.service";

@Component({
  selector: 'app-dependency-graph',
  templateUrl: './dependency-graph.component.html',
  styleUrls: ['./dependency-graph.component.scss']
})
export class DependencyGraphComponent implements OnInit {

  private unsubscribe: Subject<void> = new Subject<void>();
  public loading: boolean = false;
  public formGroup: FormGroup;

  constructor(private dependencyGraph: DependencyService,
              private toastService: ToastService
  ) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      projectPath: new FormControl('', [Validators.required])
    })
  }

  public onDependencyGraph() {
    if (this.formGroup.valid) {
      this.loading = true;
      this.dependencyGraph.dependencyGraph(this.formGroup.controls['projectPath'].value)
        .pipe(takeUntil(this.unsubscribe))
        .pipe(map(res => res.body))
        .subscribe((value) => this.onSuccess(value), (error) => this.onFailed(error));
    }
  }

  private onSuccess(value) {
    this.constructGraph(value);
    console.log(value);
  }


  private onFailed(error) {
    this.loading = false;
    this.toastService.show(
      'Incorrect project path'
    )
  }

  private constructGraph(graphData) {
    const map = new Map();
    const graph = this.initGraph();
    graphData.forEach(value => {
      let rect = new joint.shapes.basic.Rect({
        position: {x: randomPlace().x, y: randomPlace().y},
        size: {width: (value.className.length * 10) - 20, height: 40},
        attrs: {
          rect: {fill: '#424242', "stroke-width": '0'},
          text: {text: value.className, fill: 'white'}
        }
      });

      rect.addTo(graph);

      value.dependencies.forEach(dep => {
        let rectangle = null;
        if (!map.get(dep)) {
          rectangle = new joint.shapes.basic.Rect({
            position: {x: randomPlace().x, y: randomPlace().y},
            size: {width: (dep.length * 10) - 20, height: 40},
            attrs: {
              rect: {fill: '#424242', "stroke-width": '0'},
              text: {text: dep, fill: 'white'}
            }
          });
          map.set(dep, rectangle)
          rectangle.addTo(graph);
        } else {
          rectangle = map.get(dep);
          rectangle.addTo(graph);
        }


        let link = new joint.shapes.standard.Link({
          attrs: {line: {stroke: 'black', 'stroke-width': 1}}
        });
        link.source(rect);
        link.target(rectangle);
        link.addTo(graph);
      })

    })

    /* for (const [k, v] of graphData.entries()) {
       if (!m2.get(v)) {
         rect2 = new joint.shapes.basic.Rect({
           position: {x: randomPlace().x, y: randomPlace().y},
           size: {width: (v.length * 10) - 20, height: 30},
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

     }*/
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

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
