import { NgModule } from '@angular/Core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../app/auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dashbordRoutes } from './dashboard/dashboard.routes';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: DashboardComponent, children: dashbordRoutes },
    { path: '**', redirectTo: '' },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
    
}