import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CallGraphComponent} from "./call-graph/call-graph.component";
import {DependencyGraphComponent} from "./dependency-graph/dependency-graph.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {SettingsComponent} from "./settings/settings.component";

const routes: Routes = [


  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "call-graph",
        component: CallGraphComponent
      },
      {
        path: "dependency-graph",
        component: DependencyGraphComponent
      },
      {
        path: "statistics",
        component: StatisticsComponent
      },
      {
        path: "settings",
        component: SettingsComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
