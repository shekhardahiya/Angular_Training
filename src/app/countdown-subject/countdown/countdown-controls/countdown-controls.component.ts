import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../../data-provider.service';

@Component({
  selector: 'app-countdown-controls',
  templateUrl: './countdown-controls.component.html',
  styleUrls: ['./countdown-controls.component.css']
})
export class CountdownControlsComponent implements OnInit {
  buttonFlag:boolean=false

  constructor(private data:DataProviderService) { }

  ngOnInit(): void {
  }
  createNewTimer(val:any){
    if(val){
      if(this.buttonFlag==false){
        this.data.timer.next(val)
        this.buttonFlag=true;
        this.pauseTimer(false)
        // this.sendObj(false)
      }
      else{
        this.pauseTimer(true)
        // this.sendObj(true)
        this.buttonFlag=false;
      }
      // this.resetFlag.emit(false)
    } 

  }

  pauseTimer(value:any) {
    this.data.pauseFlag.next(value)

  }
  // sendObj(value:any){
  //   this.timeStampObj.emit({time:formatDate(Date.now(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530'),flag:value});
  // }
  // toReset(value:any){
  //   this.resetFlag.emit(value);
  //   this.buttonFlag=false;
  // }


  
}
