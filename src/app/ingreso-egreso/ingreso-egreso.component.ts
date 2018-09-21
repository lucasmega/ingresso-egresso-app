import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import Swal from 'sweetalert2';

import * as fromIgresoEgreso from './ingreso-egreso.reducer'
import { Store } from '@ngrx/store';
// import { AppState } from '../app.reducer';

import { IngresoEgresoModel } from './ingreso-egreso.model';
import { IngresoEgresoService } from './ingreso-egreso.service';
import { ActivarLoadingAction, DescactivarLoadingAction } from '../shared/ui.accions';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: []
})
export class IngresoEgresoComponent implements OnInit, OnDestroy {
  
  public form: FormGroup;
  public tipo = 'ingreso';
  public loadingSubscription: Subscription = new Subscription();
  public cargando: boolean;

  constructor(public ingresoEgresoService: IngresoEgresoService, private store: Store<fromIgresoEgreso.AppState>) { }
  
  ngOnInit() {
    this.loadingSubscription = this.store.select('ui').subscribe(ui => this.cargando = ui.isLoading);
    this.form = new FormGroup({
      'descripcion': new FormControl('', Validators.required),
      'monto': new FormControl(0, Validators.min(0))
    });
  }
  
  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
  
  public crearIngresoEgreso(): void {
    this.store.dispatch(new ActivarLoadingAction());
    const ingresoEgreso = new IngresoEgresoModel({ ...this.form.value, tipo: this.tipo});
    this.ingresoEgresoService.crearIngresoEgreso( ingresoEgreso )
    .then(() => {
      this.store.dispatch(new DescactivarLoadingAction());
      Swal('Creado', ingresoEgreso.descripcion, 'success');
    })
    .catch(() => {
      this.store.dispatch(new DescactivarLoadingAction());
      Swal('Error en crear' + `${this.tipo}`, ingresoEgreso.descripcion, 'error');
    });
    this.form.reset({'monto': 0});
  }
  
}
