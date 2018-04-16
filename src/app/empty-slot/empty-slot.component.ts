import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-slot',
  templateUrl: './empty-slot.component.html',
  styleUrls: ['./empty-slot.component.scss']
})
export class EmptySlotComponent {

  @Input() selected;
}
