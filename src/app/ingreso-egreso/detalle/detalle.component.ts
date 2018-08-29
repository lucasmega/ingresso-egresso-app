import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

//Alert
import Swal from 'sweetalert2';

//Redux
import { Store } from '@ngrx/store';

//App
import { AppState } from '../../app.reducer';
import { IngresoEgresoModel } from '../ingreso-egreso.model';
import { IngresoEgresoService } from '../ingreso-egreso.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit, OnDestroy {
  
  public items: IngresoEgresoModel[];
  public subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>, private ingresoEgresoService: IngresoEgresoService) { 
    this.subscription = this.store.select('ingresoEgreso').subscribe(ingresoEgreso => {
      this.items = ingresoEgreso.items;
    });
  }

  ngOnInit() {

  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  public borrarItem(uid: string, descripcion: string): void {
    this.ingresoEgresoService.borrarIngresoEgreso(uid).then(() => {
      Swal('Item eliminado', descripcion, 'success');
    }).catch(error => {
      Swal('Error en borrar', error.message, 'error');
    })
  }

}
