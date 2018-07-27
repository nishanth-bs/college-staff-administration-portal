import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakeAttendanceRoutingModule,routingComponent } from './take-attendance-routing.module';
import { TakeAttendanceComponent } from './take-attendance.component';
import { SelectClassComponent } from './select-class/select-class.component';
import { AddAttendanceGridComponent } from './add-attendance-grid/add-attendance-grid.component';

@NgModule({
  imports: [
    CommonModule,
    TakeAttendanceRoutingModule,
    
  ],
  declarations: [TakeAttendanceComponent, SelectClassComponent, AddAttendanceGridComponent,routingComponent],
  bootstrap: [TakeAttendanceComponent]
})
export class TakeAttendanceModule { }
