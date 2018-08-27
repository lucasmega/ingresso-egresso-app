import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';


//Firebase
import { AngularFirestore, DocumentReference } from 'angularfire2/firestore';

//Redux
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';

//App
import { IngresoEgresoModel } from './ingreso-egreso.model';
import { AuthService } from '../auth/auth.service';
import { SetItemsAction } from './ingreso-egreso.actions';



@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {
  
  private ingresoEgresoListenerSubscrition: Subscription = new Subscription();
  private ingresoEgresoItemsSubscrition: Subscription = new Subscription();

  constructor(private afDB: AngularFirestore, private authService: AuthService, private store: Store<AppState>) { }
  
  public cancelarSubscrition(): void {
    this.ingresoEgresoListenerSubscrition.unsubscribe();
    this.ingresoEgresoItemsSubscrition.unsubscribe();
  }
  
  public initIngresoEgresoListener(): void {
   this.ingresoEgresoListenerSubscrition = this.store.select('auth').pipe(filter( auth => auth.user != null)).subscribe(auth => this.ingresoEgresoItems(auth.user.uid));
  }
  
  private ingresoEgresoItems( uid: string): any {
    this.ingresoEgresoItemsSubscrition = this.afDB.collection(`${ uid }/ingresos-egresos/items`).snapshotChanges()
    .pipe(
      map(docData => {
        return docData.map( doc => {
          return {
            uid: doc.payload.doc.id,
            ...doc.payload.doc.data()
          };
        });
      })
    )
    .subscribe((coleccion: any[]) => { 
      this.store.dispatch(new SetItemsAction(coleccion))
    });
  }
  
  public crearIngresoEgreso(ingresoEgreso: IngresoEgresoModel): Promise<DocumentReference> {
    const user = this.authService.getUsuario();
    return this.afDB.doc(`${ user.uid }/ingresos-egresos`).collection('items').add({...ingresoEgreso});
  }
  
  public borrarIngresoEgreso(uid: string): Promise<void> {
    const user = this.authService.getUsuario();
    return this.afDB.doc(`${user.uid}/ingresos-egresos/items/${uid}`).delete();
  }
}
