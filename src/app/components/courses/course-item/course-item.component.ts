import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'course-item',
  templateUrl: 'course-item.component.html',
  styles: [require('./course-item.component.css')],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseItemComponent {
  @Input()
  public item: Item;
  @Output()
  public removeCourse: EventEmitter<Item> = new EventEmitter();

  public remove(courseItem: Item) {
    const confirmed = confirm('Do you really want to delete this course?');
    if (confirmed === true) {
      this.removeCourse.emit(courseItem);
    }
  }
}
