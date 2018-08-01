import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnouncementsRoutingModule } from './announcements-routing.module';
import { AnnouncementsComponent } from './announcements.component';

@NgModule({
  imports: [
    CommonModule,
    AnnouncementsRoutingModule
  ],
  declarations: [AnnouncementsComponent]
})
export class AnnouncementsModule { }
