import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../../data-provider.service';

@Component({
  selector: 'app-countdown-display',
  templateUrl: './countdown-display.component.html',
  styleUrls: ['./countdown-display.component.css']
})
export class CountdownDisplayComponent implements OnInit {
  flag:any=false;
  pause:any=false;
  constructor(private data:DataProviderService) { 
    this.data.timer.subscribe(ele=>{
      this.timer=ele;
      this.startCountdown(this.timer)
      
    })
    this.data.pauseFlag.subscribe(ele=>{
      this.pause=ele;
    })
  }
  timer:any;

  ngOnInit(): void {
     console.log(this.timer)
  }

  ngOnChanges(): void{

}

startCountdown(toDisplay:number) {
  
     
  if(toDisplay>0 ){

   const interval = setInterval(() => {
     if (this.pause== true) {
       clearInterval(interval);
     }
     if(!this.pause){
       this.timer=toDisplay;
       toDisplay--;
     }
     if (toDisplay <0 ) {
      //  let audio = new Audio('https://www.soundsnap.com/radio_transmission_callout_spacex_mission_control_female_voice_says_countdown');

      //  audio.play()
       clearInterval(interval);
     }
    //  if(this.resetFlag){
    //    clearInterval(interval)
    //    this.toDisplay=0
    //  }
   }, 1000);
  }  
}
}
