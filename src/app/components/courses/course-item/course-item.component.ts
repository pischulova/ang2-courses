import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'course-item',
  templateUrl: 'course-item.component.html',
  styles: [require('./course-item.component.css')]
})

export class CourseItemComponent {
  @Input() 
  item: Item;
  @Output()
  removeCourse: EventEmitter<Item> = new EventEmitter();

  remove(courseItem: Item) {
  	console.log('item');
    this.removeCourse.emit(courseItem);
  }
}
