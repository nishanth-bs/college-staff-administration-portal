import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QpRoutingModule } from './qp-routing.module';
import { QpComponent } from './qp.component';
import { TabQpComponent } from './tab-qp/tab-qp.component';
import {AngularMaterial} from '../../angular-material';
import { PageHeaderModule1 } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    QpRoutingModule,
    FormsModule,
    
    AngularMaterial,
    PageHeaderModule1
  ],
  declarations: [QpComponent, TabQpComponent]
})
export class QpModule { }
