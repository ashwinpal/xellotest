import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-slot',
  templateUrl: './course-slot.component.html',
  styleUrls: ['./course-slot.component.scss']
})
export class CourseSlotComponent {

  @Input() course;
  @Input() selected;
}
