import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchemesComponent } from './schemes.component';

const routes: Routes = [
  {path:'', component:SchemesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemesRoutingModule { }
