import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import * as components from './components';
import * as services from './services';

const angularModules = [
  CommonModule,
  FormsModule,
  HttpModule
];

function toArray(obj) {
  return Object.keys(obj).map((k) => obj[k]);
}

const declarations = [...toArray(components)];
const providers = [...toArray(services)];

@NgModule({
  imports: [...angularModules],
    declarations: [...declarations],
    exports: [
      ...angularModules,
      ...declarations]
})

export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ...providers
      ]
    };
  }
}
