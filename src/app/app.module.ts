import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { YearcolumnComponent } from './yearcolumn/yearcolumn.component';
import { EmptySlotComponent } from './empty-slot/empty-slot.component';
import { CourseSlotComponent } from './course-slot/course-slot.component';
import { AddSlotComponent } from './add-slot/add-slot.component';


@NgModule({
  declarations: [
    AppComponent,
    YearcolumnComponent,
    EmptySlotComponent,
    CourseSlotComponent,
    AddSlotComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
