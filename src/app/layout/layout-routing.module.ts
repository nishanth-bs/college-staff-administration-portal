import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'student-dashboard', pathMatch: 'prefix' },
            { path: 'student-dashboard', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'teacher-dashboard', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'update-progress', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'question-papers', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'enter-marks', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'teachers', loadChildren: './teachers/teachers.module#TeachersModule' },
            { path: 'students', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'schemes', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'announcements', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'take-attendance', loadChildren: './take-attendance/take-attendance.module#TakeAttendanceModule'},
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
