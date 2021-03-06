import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'
import { Subscription } from 'rxjs';

import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import Swal from 'sweetalert2';

import { User } from './user.model';

import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { ActivarLoadingAction, DescactivarLoadingAction } from '../shared/ui.accions';
import { SetUserActions } from './auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private userSubscription: Subscription = new Subscription();
  private usuario: User;

    constructor(
      private afAuth: AngularFireAuth, 
      private router: Router, 
      private afDB: AngularFirestore, 
      private store: Store<AppState>
    ) { }
  
  /**
   * Author: Lucas Mega
   * Method responsible for listening when you change the user state
   * @param fbUser (Contains user information)
   * @param usuarioObj (Contains user information)
   * @param userSubscription (Uninscribe of the observable)
   */
  public initAuthListener(): void {
    this.userSubscription = this.afAuth.authState.subscribe((fbUser: firebase.User)  => {
      if (fbUser) {
        this.afDB.doc(`${fbUser.uid}/usuario`).valueChanges().subscribe((usuarioObj: any )=> {
          const newUser = new User(usuarioObj);
          this.store.dispatch(new SetUserActions(newUser));
          this.usuario = newUser;
        });
      } else {
        this.usuario = null;
        this.userSubscription.unsubscribe();
      }
    });
  }
  
  /* 
    Author: Lucas Mega
    Service responsible for creating in-app user
  */
  public crearUsuario(nombre: string, email: string, password: string): void {
    
    this.store.dispatch(new ActivarLoadingAction());
    
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(res => {

      /* Create a per-user database on firebase */
      const user: User = {uid: res.user.uid, nombre: nombre, email: res.user.email};
      
      this.afDB.doc(`${user.uid}/usuario`).set(user).then(res => {
        this.router.navigate(['/']);
        this.store.dispatch(new DescactivarLoadingAction());
      }).catch(error => {
        this.store.dispatch(new DescactivarLoadingAction());
        Swal('Error en el login', error.message, 'error');
      }); 
        
      this.router.navigate(['/']);
    }).catch(error => {
      console.error(error);
      Swal('Error en el login', error.message, 'error');
    });
  }
  
  /* 
  Author: Lucas Mega
  Service responsible for logging into the application
  */
  public login(email: string, password: string): void {
    this.store.dispatch(new ActivarLoadingAction());
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
      this.router.navigate(['/']);
      this.store.dispatch(new DescactivarLoadingAction());
    }).catch(error => {
      console.error(error);
      this.store.dispatch(new DescactivarLoadingAction());
      Swal('Error en el login', error.message, 'error');
    });
  }
  
  /* 
  Author: Lucas Mega
  Service responsible for exiting the application
  */
  public logout(): void {
    this.router.navigate(['/login']);
    this.afAuth.auth.signOut();
  }
  
  /* 
  Author: Lucas Mega
  Redirect user to login if not logged in
  */
  public isAuth(): any {
    return this.afAuth.authState.pipe(map(fbUser => {
      if (fbUser === null) {
        this.router.navigate(['/login']);
      }
      return fbUser != null
    }));
  }
  
  public getUsuario(): User {
    return { ... this.usuario };
  }
}
