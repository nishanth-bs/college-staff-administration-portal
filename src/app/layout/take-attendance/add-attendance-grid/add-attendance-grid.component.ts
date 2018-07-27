import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { parse } from 'url';
import { StudentService } from '../../../services/student.service';
import { UsnName } from '../../../interfaces';
 
@Component({
  selector: 'app-add-attendance-grid',
  templateUrl: './add-attendance-grid.component.html',
  styleUrls: ['./add-attendance-grid.component.css']
})
export class AddAttendanceGridComponent implements OnInit {

  _sem : Number;
  _sec : String;
  _studentsList : UsnName[];
  constructor(private _stud:StudentService, private _route:ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params:ParamMap) => {
      let sem = parseInt(params.get('sem'));
      let sec = (params.get('sec'));
      this._sem = sem;
      this._sec = sec;
      this._stud.getStudentList(this._sem,this._sec).subscribe(data => this._studentsList=data );
    })
  }

}
