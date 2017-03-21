import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '../../common/components';
import { CoursesComponent } from './courses.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { CourseItemComponent } from './course-item/course-item.component';

@NgModule({
  declarations: [
    CoursesComponent,
    ToolboxComponent,
    CourseItemComponent
    ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    CoursesComponent,
    ToolboxComponent,
    CourseItemComponent
  ]
})
export class CoursesModule {
  constructor() {}
}
