import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
  animations: [routerTransition()]
})
export class TeachersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
