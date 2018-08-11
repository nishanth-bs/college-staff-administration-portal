import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { parse } from 'url';
import { StudentService } from '../../../services/student.service';
import { UsnName } from '../../../interfacess';
import { TakeAttendanceService } from './../take-attendance.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-attendance-grid',
  templateUrl: './add-attendance-grid.component.html',
  styleUrls: ['./add-attendance-grid.component.css']
})
export class AddAttendanceGridComponent implements OnInit {

  _sem : Number;
  _sec : String;
  _studentsList : UsnName[];
  constructor(private _stud:StudentService, private _route:ActivatedRoute, private _router: Router,private _localStudentService : TakeAttendanceService, private _location: Location) { }
  _data:any;
  @Input() id : number;
  ngOnInit() {
    
    this._localStudentService.getStudentList(this.id).subscribe(data =>this._data = data);
    /* {
      let res = data[0];
      this._data = res['stud'];
      console.log(this._data);
    } */
    console.log(this._data);
    
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
  goBack(){
    this._location.back();
  }
}
export interface stud{
  usn: string,
  name: string,
  att: number
}





