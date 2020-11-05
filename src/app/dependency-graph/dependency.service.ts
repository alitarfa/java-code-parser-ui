import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DependencyService {
  public update: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private baseUrl: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) {
  }

  dependencyGraph(projectPath: string): Observable<HttpResponse<any>> {
    return this.http.post(this.baseUrl + '/dependency-graph', projectPath, {observe: "response"});
  }

}
