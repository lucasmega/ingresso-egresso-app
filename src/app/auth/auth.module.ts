import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { AngularFireAuthModule } from 'angularfire2/auth'

import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({ 
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AngularFireAuthModule,
        RouterModule
    ]
})
export class AuthModule { }
