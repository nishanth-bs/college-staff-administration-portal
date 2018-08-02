import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FormsModule } from '@angular/forms';
import { SchemesRoutingModule } from './schemes-routing.module';
import { SchemesComponent } from './schemes.component';
import {AngularMaterial} from '../../angular-material';
import { PageHeaderModule } from '../../shared';
import { TabSchemesComponent } from './tab-schemes/tab-schemes.component';

@NgModule({
  imports: [
    CommonModule,
    SchemesRoutingModule,
    FormsModule,
    AngularMaterial,
    PageHeaderModule
  ],
  declarations: [SchemesComponent, TabSchemesComponent]
})
export class SchemesModule { }
