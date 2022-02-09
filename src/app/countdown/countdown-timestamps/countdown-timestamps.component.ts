import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown-timestamps',
  templateUrl: './countdown-timestamps.component.html',
  styleUrls: ['./countdown-timestamps.component.css']
})
export class CountdownTimestampsComponent implements OnInit, OnChanges {
  allstamps: any[] = []
  @Input() timeStampshow: any;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.allstamps.push(this.timeStampshow)
    console.log(this.allstamps)
  }



  ngOnInit(): void {

  }
  getStamp(stamp: any) {
    if (stamp.flag == false) {
      return "Started at " + stamp.time;
    }
    else if (stamp.flag == true) {
      return "Paused at " + stamp.time;
    }
    else {
      return ""
    }
  }
}
