import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { PageHeaderModule } from '../../shared';
import {AngularMaterial} from '../../angular-material';
import { TableTeacherComponent } from './table-teacher/table-teacher.component';
@NgModule({
  imports: [
    CommonModule,
    TeachersRoutingModule,
    PageHeaderModule,
    AngularMaterial
  ],
  declarations: [TeachersComponent, TableTeacherComponent]
})
export class TeachersModule { }
