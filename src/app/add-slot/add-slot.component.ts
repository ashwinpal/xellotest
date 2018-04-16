import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-slot',
  templateUrl: './add-slot.component.html',
  styleUrls: ['./add-slot.component.scss']
})
export class AddSlotComponent {

  @Input() course;
  @Input() selected;
}
