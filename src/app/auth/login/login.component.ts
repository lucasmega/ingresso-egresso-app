import { Component, OnInit } from '@angular/core';


//Firebase
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  
  public onSubmit(data): void {
    console.log('data =>', data);
    this.authService.login(data.email, data.password);
  }

}
