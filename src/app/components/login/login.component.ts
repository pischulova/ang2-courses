import { Component } from '@angular/core';
import { AuthorizationService } from '../../core/services';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  public username: string;
  public password: string;

  constructor(private authService: AuthorizationService) {}

  public performLogin() {
    this.authService.login(this.username, this.password);
  }
}
