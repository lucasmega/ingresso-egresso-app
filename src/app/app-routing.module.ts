import { NgModule } from '@angular/Core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../app/auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', loadChildren: './ingreso-egreso/ingreso-egreso.module#IngresoEgresoModule', canLoad: [ AuthGuardService ]},
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