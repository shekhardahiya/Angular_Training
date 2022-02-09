import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown-logs',
  templateUrl: './countdown-logs.component.html',
  styleUrls: ['./countdown-logs.component.css']
})
export class CountdownLogsComponent implements OnInit, OnChanges {
  allstamps: any[] = []
  @Input() timeStampshow: any;
  started: number = 0;
  paused: number = 0;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

    this.allstamps.push(this.timeStampshow)
    this.started = 0;
    this.paused = 0;
    this.allstamps.forEach(ele => {
      if (ele.flag == false) {
        this.started++
      }
      else if (ele.flag == true) {
        this.paused++
      }
    })


  }

  ngOnInit(): void {
  }

}
