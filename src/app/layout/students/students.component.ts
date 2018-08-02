import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  animations:[routerTransition()]
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  
}
