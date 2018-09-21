import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuardService } from '../auth/auth-guard.service';

import { DashboardComponent } from './dashboard.component';
import { dashbordRoutes } from './dashboard.routes';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: dashbordRoutes }
  // { path: '', component: DashboardComponent, children: dashbordRoutes, canActivate: [AuthGuardService] }
  
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule    
  ],
  declarations: []
})
export class DashboardRoutingModule { }
