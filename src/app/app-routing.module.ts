//Angular
import { NgModule } from '@angular/Core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { LoginComponent } from '../app/auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dashbordRoutes } from './dashboard/dashboard.routes';

//Services
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: DashboardComponent, children: dashbordRoutes, canActivate: [AuthGuardService] },
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