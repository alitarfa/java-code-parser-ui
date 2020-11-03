import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatChipsModule} from "@angular/material/chips";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {PortalModule} from '@angular/cdk/portal';
import {OverlayModule} from '@angular/cdk/overlay';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { CallGraphComponent } from './call-graph/call-graph.component';
import { LayoutComponent } from './core/layout/layout.component';
import { ItemMenuComponent } from './core/item-menu/item-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DependencyGraphComponent } from './dependency-graph/dependency-graph.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent } from './settings/settings.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatBadgeModule} from "@angular/material/badge";

@NgModule({
  declarations: [
    AppComponent,
    CallGraphComponent,
    LayoutComponent,
    ItemMenuComponent,
    DashboardComponent,
    DependencyGraphComponent,
    StatisticsComponent,
    SettingsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule,
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatSelectModule,
        MatTableModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSortModule,
        MatGridListModule,
        MatExpansionModule,
        MatTabsModule,
        MatProgressBarModule,
        MatPaginatorModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatRippleModule,
        MatStepperModule,
        CdkStepperModule,
        ScrollingModule,
        OverlayModule,
        PortalModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatBadgeModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
