import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakeAttendanceComponent } from './take-attendance.component';
import { AddAttendanceGridComponent } from './add-attendance-grid/add-attendance-grid.component';

const routes: Routes = [
  { path:'', component:TakeAttendanceComponent},
  { path:'class/:id', component:TakeAttendanceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TakeAttendanceRoutingModule { }

//all the routed components goes in here, so no need to import it everytimeinside the module
export const routingComponent = [TakeAttendanceComponent, AddAttendanceGridComponent]

