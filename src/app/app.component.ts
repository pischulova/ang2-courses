import {
  Component,
  OnInit,
  ViewEncapsulation,
  NgZone,
  ChangeDetectionStrategy
} from '@angular/core';
import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './app.component.css' ],
  templateUrl: 'app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState,
    private _ngZone: NgZone
  ) {
    this._ngZone.onUnstable.subscribe(() => { console.log('OnUnstable ', new Date()); } );
    this._ngZone.onStable.subscribe(() => { console.log('OnStable ', new Date()); } );
    this._ngZone.onError.subscribe((error) => {
      console.log('Error ', error instanceof Error ? error.message : error.toString(), new Date());
    } );
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}
