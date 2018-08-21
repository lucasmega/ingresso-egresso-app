import { Component, OnInit } from '@angular/core';

//Firebase
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  
  public onSubmit(data: any): void {
    console.log(data);
    this.authService.crearUsuario(data.nombre, data.email, data.password);
  }

}
