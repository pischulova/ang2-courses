import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthorizationService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styles: [require('./header.component.css')],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(private authService: AuthorizationService) {}

  public isUserAuthorized(): boolean {
    return this.authService.isAuthenticated;
  }

  public getUserName(): string {
    return this.authService.getUserInfo();
  }

  public logout() {
    this.authService.logout();
  }
}
