import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {IGraphModel} from "../core/graphModel";

@Injectable({
  providedIn: 'root'
})
export class CallGraphService {

  public update: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private baseUrl: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) {
  }

  callGraph(projectPath: string): Observable<HttpResponse<IGraphModel>> {
    return this.http.post(this.baseUrl + '/call-graph', projectPath, {observe: "response"});
  }
}
