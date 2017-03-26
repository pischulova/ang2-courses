import { Component, OnInit } from '@angular/core';
import { Item } from './course-item/Item';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: 'courses.component.html',
  styles: [require('./courses.component.css')]
})

export class CoursesComponent implements OnInit {
  public courseList: Item[];

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.courseList = this.coursesService.getCoursesList();
  }
  
  removeCourse(courseItem: Item) {
    this.coursesService.removeCourse(courseItem.id);
    console.log('courses ', this.courseList.length);
  }
}
