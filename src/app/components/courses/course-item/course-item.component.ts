import { Component } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { Item } from './Item';

@Component({
  selector: 'course-item',
  templateUrl: 'course-item.component.html',
  styles: [require('./course-item.component.css')]
})
export class CourseItemComponent {
  @Input() public item: Item;

  constructor() {
  }
}
