import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatRadioModule} from '@angular/material';
import { TakeAttendanceRoutingModule,routingComponent } from './take-attendance-routing.module';
import { TakeAttendanceComponent } from './take-attendance.component';
import { SelectClassComponent } from './select-class/select-class.component';
import { AddAttendanceGridComponent } from './add-attendance-grid/add-attendance-grid.component';
import { FormModule } from '../form/form.module';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatGridListModule} from '@angular/material/grid-list';

const modules = [
  MatButtonModule,
  MatRadioModule  
]

@NgModule({
  imports: [
    CommonModule,
    TakeAttendanceRoutingModule,
    MatGridListModule,
    //BrowserAnimationsModule,
    FormModule,
    modules
    
  ],
  exports:[
    modules
  ],
  declarations: [TakeAttendanceComponent, SelectClassComponent, AddAttendanceGridComponent,routingComponent],
  bootstrap: [TakeAttendanceComponent]
})
export class TakeAttendanceModule { }
