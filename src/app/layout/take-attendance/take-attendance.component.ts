import { Component, OnInit } from '@angular/core'; 
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-take-attendance',
  templateUrl: './take-attendance.component.html',
  styleUrls: ['./take-attendance.component.css'],
  animations:[routerTransition()]
})
export class TakeAttendanceComponent implements OnInit {
  data : any;
  constructor() { }

  ngOnInit() {
    
  }
  
  

}
 