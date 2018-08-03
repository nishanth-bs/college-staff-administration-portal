import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-qp',
  templateUrl: './qp.component.html',
  styleUrls: ['./qp.component.css'],
  animations:[routerTransition()]
})
export class QpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
