import { NgModule } from '@angular/core';

import { CoreModule } from '../../core/core.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    LoginComponent
  ]
})

export class LoginModule {
}
