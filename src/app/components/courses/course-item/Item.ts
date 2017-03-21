import { CourseItem } from './CourseItem';

export class Item implements CourseItem {
  constructor(public id: number,
              public title: string,
              public description: string,
              public duration: number,
              public date: Date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.duration = duration;
    this.date = date;
  }
}
