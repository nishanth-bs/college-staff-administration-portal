import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-schemes',
  templateUrl: './schemes.component.html',
  styleUrls: ['./schemes.component.css'],
  animations:[routerTransition()]
})
export class SchemesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
