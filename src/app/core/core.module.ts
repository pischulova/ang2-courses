import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import * as components from './components';

const angularModules = [
	CommonModule,
	FormsModule,
	HttpModule
];

function toArray(obj) {
	return Object.keys(obj).map(k => obj[k]);
}

const declarations = [...toArray(components)]

@NgModule({
	imports: [...angularModules],
  	declarations: [...declarations],
  	exports: [
  		...angularModules,
  		...declarations]
})

export class CoreModule {
  	static forRoot(): ModuleWithProviders {
  		return {
  			ngModule: CoreModule,
  			providers: [

  			]
  		};
  	}
}

