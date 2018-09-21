import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';

// import { AppState } from '../../app.reducer';
import * as fromIngresoEgreso from '../ingreso-egreso.reducer';
import { IngresoEgresoModel } from '../ingreso-egreso.model';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: []
})
export class EstadisticaComponent implements OnInit, OnDestroy {
  
  public ingresos = 0;
  public egresos = 0;
  public cuantosIngresos = 0;
  public cuantosEgresos = 0;
  private subscription: Subscription = new Subscription();
  public doughnutChartLabels: string[] = ['Ingresos', 'Egresos'];
  public doughnutChartData: number[] = [];

  constructor(private store: Store<fromIngresoEgreso.AppState>) { 
    this.subscription = this.store.select('ingresoEgreso').subscribe(ingresoEgreso => this.contarIngresoEgreso(ingresoEgreso.items));
  }

  ngOnInit() {
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  public contarIngresoEgreso(items: IngresoEgresoModel[]): void {
    items.forEach(item => {
      if (item.tipo === 'ingreso') {
        this.cuantosIngresos++;
        this.ingresos += item.monto;
      } else {
        this.cuantosEgresos++;
        this.egresos =+ item.monto;
      }
    });
    this.doughnutChartData = [this.ingresos, this.egresos];
  }

}
