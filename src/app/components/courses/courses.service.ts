import { Injectable } from '@angular/core';
import { Item } from './course-item/Item';

@Injectable()
export class CoursesService {

  private coursesList: Item[] = [
    {
      id: 1,
      title: 'Babel for beginners',
      description: `Babel has support for the latest version of JS through syntax transformers. ` +
      `These plugins allow you to use new syntax, right now without waiting for browser support.`,
      duration: 112,
      date: new Date()
    },
    {
      id: 2,
      title: 'Notepad++ in 30 minutes',
      description: `The best text editor and source code editor for use with Microsoft Windows.`,
      duration: 33,
      date: new Date()
    },
    {
      id: 3,
      title: 'ES6 key features',
      description: `ES6 New Features: Overview & Comparison. ` +
      `What you don't know yet, but will love soon.`,
      duration: 87,
      date: new Date()
    }
  ];

  public getCoursesList(): Item[] {
    return this.coursesList;
  }

  public getCourseById(id: number): Item {
    return this.coursesList.find((item) => item.id === id);
  }

  public createCourse(course: Item) {
    this.coursesList.push(course);
  }

  public updateCourse(course: Item) {
    const courseItem = this.getCourseById(course.id);
    const index = this.coursesList.indexOf(courseItem);
    this.coursesList.splice(index, 1, course);
  }

  public removeCourse(id: number) {
    const courseItem = this.getCourseById(id);
    const index = this.coursesList.indexOf(courseItem);
    this.coursesList.splice(index, 1);
  }
}
