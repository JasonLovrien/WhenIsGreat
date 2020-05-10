import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list'

import { CalendarGridComponent } from './components/calendar-grid/calendar-grid.component'



@NgModule({
  imports: [
    CommonModule,
    MatGridListModule
  ],

  declarations: [
    CalendarGridComponent
  ],

  exports: [
    CalendarGridComponent, 
    CommonModule, // Why export Common and mat-grid: https://angular.io/guide/sharing-ngmodules
    MatGridListModule
  ]
})
export class SharedModule { }
