import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

//Firebase
import { AuthService } from '../auth.service';

//Redux - ngrx
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit, OnDestroy {
  
  public cargando: boolean;
  public subscription: Subscription;

  constructor(public authService: AuthService, public store: Store<AppState>) { 
    this.subscription = this.store.select('ui').subscribe(ui => this.cargando = ui.isLoading);
  }

  ngOnInit() {
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  public onSubmit(data): void {
    this.authService.login(data.email, data.password);
  }
  

}
