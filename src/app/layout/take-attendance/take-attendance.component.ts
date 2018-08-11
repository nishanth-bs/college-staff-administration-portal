import { Component, OnInit } from '@angular/core'; 
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TakeAttendanceService } from './take-attendance.service';
import { UsnName } from '../../interfacess';
@Component({
  selector: 'app-take-attendance',
  templateUrl: './take-attendance.component.html',
  styleUrls: ['./take-attendance.component.css'],
  animations:[routerTransition()]
})
export class TakeAttendanceComponent implements OnInit {
  data : any;
  _studentsList : UsnName[];
  constructor(private _route:ActivatedRoute, private _localStudentService : TakeAttendanceService) { }
  private _id : Number;
  ngOnInit() {
    this._route.paramMap.subscribe((params:ParamMap) => {
      let id = parseInt(params.get('id'));
      this._id = id;
      //this._localStudentService.getStudentList(this._id).subscribe(data => this._studentsList=data );
    })
  }
  
  

}
 