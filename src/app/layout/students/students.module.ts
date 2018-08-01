import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule
  ],
  declarations: [StudentsComponent]
})
export class StudentsModule { }
