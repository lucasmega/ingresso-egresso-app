//Angular
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

//Services
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  public constructor(public authService: AuthService) { }
  
  public canActivate(): boolean {
    return this.authService.isAuth();
  }
}
