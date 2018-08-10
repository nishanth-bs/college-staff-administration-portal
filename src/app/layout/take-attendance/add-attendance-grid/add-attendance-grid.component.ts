import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { parse } from 'url';
import { StudentService } from '../../../services/student.service';
import { UsnName } from '../../../interfacess';
import { TakeAttendanceService } from './../take-attendance.service';
@Component({
  selector: 'app-add-attendance-grid',
  templateUrl: './add-attendance-grid.component.html',
  styleUrls: ['./add-attendance-grid.component.css']
})
export class AddAttendanceGridComponent implements OnInit {

  _sem : Number;
  _sec : String;
  _studentsList : UsnName[];
  constructor(private _stud:StudentService, private _route:ActivatedRoute, private _router: Router,private _localStudentService : TakeAttendanceService) { }
  _data:any;
  ngOnInit() {
    
    this._localStudentService.getStudentList().subscribe(data =>this._data = data);
    /* {
      let res = data[0];
      this._data = res['stud'];
      console.log(this._data);
    } */
    console.log(this._data);
    this._route.paramMap.subscribe((params:ParamMap) => {
      let sem = parseInt(params.get('sem'));
      let sec = (params.get('sec'));
      this._sem = sem;
      this._sec = sec;
      this._stud.getStudentList(this._sem,this._sec).subscribe(data => this._studentsList=data );
    })
  }


  /* updated code */
  toggleAtt(obj){
    if(obj.att == 1){
      return 'green';
    }else{
      return 'red';
    }
    //console.log(this.color);
  }
  toggleAttendance(obj){
    if(obj.att == 1){
      obj.att =0;
    }
    else{
      obj.att = 1;
    }
  }

  
  color:stud[]=[
    { usn : '1RN15IS055', name:'Nishanth', att:1 },
    { usn : '1RN15IS055', name:'Nishanth', att:1 },
    { usn : '1RN15IS055', name:'Nishanth', att:1 },
    { usn : '1RN15IS055', name:'Nishanth', att:1 },
    { usn: '1RN15IS061', name:'Pran', att:1},
    { usn: '1RN15IS061', name:'Pran', att:1},
    { usn: '1RN15IS061', name:'Pran', att:1},
    { usn: '1RN15IS061', name:'Pran', att:1}
 ]
}
export interface stud{
  usn: string,
  name: string,
  att: number
}





