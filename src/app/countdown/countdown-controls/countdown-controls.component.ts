import { formatDate } from '@angular/common';
import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown-controls',
  templateUrl: './countdown-controls.component.html',
  styleUrls: ['./countdown-controls.component.css']
})
export class CountdownControlsComponent implements OnInit, OnChanges {

  buttonFlag: boolean = false;
  @Output() newTimerEmit = new EventEmitter<any>();
  @Output() pauseFlag = new EventEmitter<boolean>();
  @Output() resetFlag = new EventEmitter<boolean>();
  @Output() timeStampObj = new EventEmitter<Object>();
  @Input() startPauseFlag1: any
  timer: any = ''
  counter: any = 0
  inputDisabled: any
  enableButton: boolean = false;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const startPauseValue = changes['startPauseFlag1']
    if (startPauseValue.firstChange == false) {
      console.log('cslled')
      this.buttonFlag = false;
      this.timer = ''
      this.inputDisabled = false;
      this.enableButton = false;
    }
  }

  ngOnInit(): void {
    console.log(this.timer)
  }

  createNewTimer(value?: any) {
    this.enableButton = true;
    if (this.buttonFlag == false) {
      this.newTimerEmit.emit({ index: this.counter++, value: value });
      this.buttonFlag = true;
      this.pauseTimer(false)
      this.sendObj(false)
    }
    else {
      console.log('call')
      this.pauseTimer(true)
      this.sendObj(true)
      this.buttonFlag = false;
    }
    this.resetFlag.emit(false)
    this.timer = ''
    this.inputDisabled = true;
  }
  pauseTimer(value: any) {
    this.pauseFlag.emit(value);

  }
  sendObj(value: any) {
    this.timeStampObj.emit({ time: formatDate(Date.now(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530'), flag: value });
  }
  toReset(value: any) {
    this.resetFlag.emit(value);
    this.buttonFlag = false;
    this.inputDisabled = false;
    this.timer = ''
    this.enableButton = false;

  }

}
