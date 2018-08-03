import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QpComponent } from './qp.component';

const routes: Routes = [
  {path:'', component: QpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QpRoutingModule { }
