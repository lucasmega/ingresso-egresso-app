//angular
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'

//Firebase
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

//Sweet alert 2
import Swal from 'sweetalert2';

//Models
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router, private afDB: AngularFirestore) { }
  
  /* 
  Author: Lucas Mega
  Method responsible for listening when you change the user state
  */
  public initAuthListener(): void {
    this.afAuth.authState.subscribe((fbUser: firebase.User)  => {
      console.log('FirebaseUser =>', fbUser);
    });
  }
  
  /* 
    Author: Lucas Mega
    Service responsible for creating in-app user
  */
  public crearUsuario(nombre: string, email: string, password: string): void {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(res => {

      /* Create a per-user database on firebase */
      const user: User = {uid: res.user.uid, nombre: nombre, email: res.user.email};
      
      this.afDB.doc(`${user.uid}/usuario`).set(user).then(res => {
        this.router.navigate(['/']);
      }).catch(error => {
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
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
      console.log('resposta =>', res);
      this.router.navigate(['/']);
    }).catch(error => {
      console.error(error);
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
}
