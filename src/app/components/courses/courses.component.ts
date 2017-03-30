import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Item } from './course-item/Item';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: 'courses.component.html',
  styles: [require('./courses.component.css')],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesComponent implements OnInit {
  public courseList: Item[];

  constructor(private coursesService: CoursesService) {}

  public ngOnInit() {
    this.courseList = this.coursesService.getCoursesList();
  }

  public removeCourse(courseItem: Item) {
    this.coursesService.removeCourse(courseItem.id);
  }
}
