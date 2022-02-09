import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CountdownComponent implements OnInit {

  value: any ;
  flag: boolean = false;
  timeStamp: object = {}
  resetFlag: boolean = false;
  startPauseFlag1:any
  constructor() { }

  ngOnInit(): void {
  }
  addItem(newItem: any) {
    this.value = newItem
  }
  showFlag(flag: any) {
    this.flag = flag;
  }

  showTimeStamp(stamp: any) {
    this.timeStamp = stamp;
  }

  resetFlagValue(flag: any) {
    this.resetFlag = flag;
  }
  startPauseFlagEmit(flag:any  ){
    this.startPauseFlag1=flag
  }
}
