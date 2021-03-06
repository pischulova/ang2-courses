import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'toolbox',
  templateUrl: 'toolbox.component.html',
  styles: [require('./toolbox.component.css')],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ToolboxComponent {
  @Input() public searchInput: string;

  public find() {
    console.log(this.searchInput);
  }
}
