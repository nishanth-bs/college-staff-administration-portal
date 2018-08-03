import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tab-qp',
  templateUrl: './tab-qp.component.html',
  styleUrls: ['./tab-qp.component.css']
})
export class TabQpComponent implements OnInit {
  value = "";
  constructor() { }

  ngOnInit() {
    
  }
  tabs = ['CBCS2015','CBCS2017'];
  selected = new FormControl(0);

  addTab() {
    this.tabs.push(this.value);  
    this.selected.setValue(this.tabs.length - 1); 
    this.value="";
  }
  folders: Section[] = [
    {
      name: 'InternalMEQP_6th_sem',
      updated: new Date('1/1/16'),
    },
    {
      name: 'InternalFSQP_4thsem',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Internal_3rdsem_general',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Internal_3rdsem',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Internal_8thsem_dc',
      updated: new Date('1/18/16'),
    }
  ];
  /*removeTab(index: number) {
    this.tabs.splice(index, 1);
  }*/
}
