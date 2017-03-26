import { NgModule } from '@angular/core';

import { CoreModule } from '../../core/core.module';
import { CoursesComponent } from './courses.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    CoursesComponent,
    ToolboxComponent,
    CourseItemComponent
    ],
  imports: [
    CoreModule
  ],
  providers: [
    CoursesService
  ],
  exports: [
    CoursesComponent
  ]
})

export class CoursesModule {
}
