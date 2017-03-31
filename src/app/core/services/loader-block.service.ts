import { Injectable } from '@angular/core';

@Injectable()
export class LoaderBlockService {
  public isShown: boolean = false;

  public show() {
    this.isShown = true;
  }

  public hide() {
    this.isShown = false;
  }
}
