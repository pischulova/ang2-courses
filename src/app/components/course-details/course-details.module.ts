import { NgModule } from '@angular/core';

import { CoreModule } from '../../core/core.module';
import { CourseDetailsComponent } from './course-details.component';

@NgModule({
  declarations: [
    CourseDetailsComponent 
  ],
  imports: [
    CoreModule
  ],
  exports: [
    CourseDetailsComponent
  ]
})

export class CourseDetailsModule {
}
