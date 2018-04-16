import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-yearcolumn',
  templateUrl: './yearcolumn.component.html',
  styleUrls: ['./yearcolumn.component.scss']
})
export class YearcolumnComponent implements OnInit {

  @Input() data;
  emptyArray: Array<any>;

  ngOnInit() {
    this.emptyArray = new Array(this.data.emptySlots);
  }
}
