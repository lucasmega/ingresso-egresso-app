import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';

import { take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {
  
  public numberListened = 1;

  public constructor(public authService: AuthService) { }
  
  public canActivate(): Promise<boolean> {
    return this.authService.isAuth();
  }
  
  public canLoad(): Promise<boolean> {
    return this.authService.isAuth().pipe(take(this.numberListened));
  }
}
