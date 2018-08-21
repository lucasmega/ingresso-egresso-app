//angular
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

//Firebase
import { AngularFireAuth } from 'angularfire2/auth';

//Sweet alert 2
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }
  
  public crearUsuario(nombre: string, email: string, password: string): void {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(res => {
      console.log('resposta =>', res);
      this.router.navigate(['/']);
    }).catch(error => {
      console.error(error);
      Swal('Error en el login', error.message, 'error');
    });
  }
  
  public login(email: string, password: string): void {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
      console.log('resposta =>', res);
      this.router.navigate(['/']);
    }).catch(error => {
      console.error(error);
      Swal('Error en el login', error.message, 'error');
    });
  }
}
