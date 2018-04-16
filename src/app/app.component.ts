import { mockData, title } from './app.config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ydata: any;
  pageTitle: any;
  pageData: any;
  ngOnInit() {
    this.pageTitle = title;
    this.pageData = mockData.yearData;
    this.ydata = Object.keys(mockData.yearData);
  }
}
