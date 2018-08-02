import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tab-schemes',
  templateUrl: './tab-schemes.component.html',
  styleUrls: ['./tab-schemes.component.css']
})
export class TabSchemesComponent implements OnInit {
  value = "";
  constructor() { }

  ngOnInit() {
    
  }
  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab() {
    this.tabs.push(this.value);  
    this.selected.setValue(this.tabs.length - 1); 
    this.value="";
  }

  /*removeTab(index: number) {
    this.tabs.splice(index, 1);
  }*/

}
