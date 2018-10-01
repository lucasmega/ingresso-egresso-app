import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route } from '@angular/router';

import { take } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {
  
  public constructor(public authService: AuthService) { }
  
  public canActivate() {
    return this.authService.isAuth();
  }
  
  public canLoad() {
    return this.authService.isAuth().pipe(take(1));
  }
}
