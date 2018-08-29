import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

//Firebase
import { AuthService } from '../auth.service';

//Redux - ngrx
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit, OnDestroy {
  
  public cargando: boolean;
  public subscription: Subscription = new Subscription();

  constructor(public authService: AuthService, public store: Store<AppState>) { 
    this.subscription = this.store.select('ui').subscribe(ui => this.cargando = ui.isLoading);
  }

  ngOnInit() {
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  public onSubmit(data: any): void {
    this.authService.crearUsuario(data.nombre, data.email, data.password);
  }

}
