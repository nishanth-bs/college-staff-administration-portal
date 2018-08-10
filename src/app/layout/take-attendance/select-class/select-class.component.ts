import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { TakeAttendanceService } from '../take-attendance.service';

@Component({
  selector: 'app-select-class',
  templateUrl: './select-class.component.html',
  styleUrls: ['./select-class.component.css'],
  animations:[routerTransition()]
}) 
export class SelectClassComponent implements OnInit {
  public classList =[];
  
  constructor(private _stud: StudentService, private _router: Router, private _route :ActivatedRoute, private _localStudentService : TakeAttendanceService) { }

  ngOnInit() {
    this._localStudentService.getTeacherClassList().subscribe(data => this.classList = data);
    //this._stud.getClasses().subscribe(data => this.classList = data);
  }
  showClassStudents(className){
    this._router.navigate([className],{relativeTo:this._route});
  }

}
