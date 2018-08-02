import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import {AngularMaterial} from '../../angular-material';
import { PageHeaderModule } from '../../shared';
import { TabComponent } from './tab/tab.component';
import { StudentsTableComponent } from './students-table/students-table.component';

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule,
    PageHeaderModule,
    AngularMaterial
  ],
  declarations: [StudentsComponent, TabComponent, StudentsTableComponent]
})
export class StudentsModule {
  constructor(){}

 }
