import { Component } from '@angular/core';
import { Item } from './course-item/Item';

@Component({
  selector: 'courses',
  templateUrl: 'courses.component.html',
  styles: [require('./courses.component.css')]
})
export class CoursesComponent {
  public courseList: Item[] = [
    new Item(1, 'Babel for beginners',
      `Babel has support for the latest version of JavaScript through syntax transformers. ` +
      `These plugins allow you to use new syntax, right now without waiting for browser support.`,
      112, new Date()),

    new Item(2, 'Notepad++ in 30 minutes',
      `The best text editor and source code editor for use with Microsoft Windows.`,
      33, new Date()),

    new Item(3, 'ES6 key features', `ES6 New Features: Overview & Comparison. ` +
      `What you don't know yet, but will love soon`,
      87, new Date())
  ];

  constructor() {
  }
}
