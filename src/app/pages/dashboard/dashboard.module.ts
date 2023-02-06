import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CardFollowersComponent } from './card.followers/card.followers.component';
import { CardOverviewComponent } from './card.overview/card.overview.component';
import { MaterialModule } from 'src/app/material.module';






@NgModule({
  declarations: [
    DashboardComponent,
    CardFollowersComponent,
    CardOverviewComponent,
   
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
  
  
  ],
  exports:[
    CardFollowersComponent,
    CardOverviewComponent,
    
  ]
})
export class DashboardModule { }
