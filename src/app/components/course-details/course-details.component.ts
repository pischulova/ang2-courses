import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'course-details',
  templateUrl: 'course-details.component.html',
  styles: [require('./course-details.component.css')],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseDetailsComponent {
}
