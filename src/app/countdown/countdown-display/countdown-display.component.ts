import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown-display',
  templateUrl: './countdown-display.component.html',
  styleUrls: ['./countdown-display.component.css']
})
export class CountdownDisplayComponent implements OnInit, OnChanges {
  @Input() toDisplay: any;
  @Input() flags: boolean = false;
  @Input() resetFlag: boolean = false;
  @Output() startPauseFlag = new EventEmitter<any>();
  toDisplayTimer: any
  counter = 0

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges): void {
    const flag=changes['flags']
    console.log(changes)
   
    if (this.toDisplay  ) {
        this.startCountdown(this.toDisplay.value)
    }
    if(flag && flag.currentValue==false){
      console.log('in')
      console.log(this.toDisplayTimer)
      this.startCountdown(this.toDisplayTimer)

    }
   
    }
  

  startCountdown(toDisplay: number) {
    console.log(toDisplay)

    if (toDisplay > 0) {

      const interval = setInterval(() => {
        if (this.flags == true) {
          clearInterval(interval);
        }
        if (!this.flags) {
          this.toDisplayTimer = toDisplay;
          toDisplay--;
        
        }
        if (toDisplay < 0) {
          let audio = new Audio('assets/ring.mp3');
          audio.play()
          this.startPauseFlag.emit({ index: this.counter++, flag: false })
          console.log('called')
          clearInterval(interval);
        }
        if (this.resetFlag) {
          clearInterval(interval)
          this.toDisplayTimer = null
        }
      }, 1000);
    }
  }

}
