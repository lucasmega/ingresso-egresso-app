//angular
import { Component, OnInit } from '@angular/core';

//Services
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  
  public logout(): void {
    this.authService.logout();
  }

}
