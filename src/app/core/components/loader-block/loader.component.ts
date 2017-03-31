import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LoaderBlockService } from '../../services';

@Component({
  selector: 'loader-block',
  templateUrl: 'loader.component.html',
  styles: [require('./loader.component.css')],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {
  private isShown: boolean;

  constructor(private loaderService: LoaderBlockService) {}

}
