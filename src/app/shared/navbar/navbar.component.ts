import { Component, OnInit, OnDestroy } from '@angular/core';

import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit, OnDestroy {
  
  public user: string;
  private subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {
    this.subscription = this.store.select('auth').pipe(filter(auth => auth.user != null)).subscribe(auth => this.user = auth.user.nombre);
  }

  ngOnInit() {
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
