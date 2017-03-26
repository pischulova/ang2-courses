import { Component } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'toolbox',
  templateUrl: 'toolbox.component.html',
  styles: [require('./toolbox.component.css')]
})

export class ToolboxComponent {
  @Input() public searchInput: string;

  constructor() {
  }

  public find() {
    console.log(this.searchInput);
  }
}
