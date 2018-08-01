import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { Router } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { StudentService } from '../services/student.service';
import { TokenInterceptorService } from '../services/tokeninterceptor.service'

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot(),
        HttpClientModule
        //Router
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
    providers: [StudentService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass : TokenInterceptorService,
            multi : true
        }]
})
export class LayoutModule {}
