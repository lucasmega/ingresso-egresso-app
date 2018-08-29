//angular
import { Component, OnInit, OnDestroy } from '@angular/core';

//Services
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit, OnDestroy {
  
  public user: string;
  
  private subscription: Subscription = new Subscription();

  constructor(private authService: AuthService, private store: Store<AppState>) { 
    this.subscription = this.store.select('auth').pipe(filter( auth => auth.user != null))
    .subscribe( auth => this.user = auth.user.nombre);
  }

  ngOnInit() {
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  public logout(): void {
    this.authService.logout();
  }

}
