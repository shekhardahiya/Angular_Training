import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountdownSubjectRoutingModule } from './countdown-subject-routing.module';
import { CountdownComponent } from './countdown/countdown.component';
import { CountdownControlsComponent } from './countdown/countdown-controls/countdown-controls.component';
import { CountdownDisplayComponent } from './countdown/countdown-display/countdown-display.component';
import { CountdownLogsComponent } from './countdown/countdown-logs/countdown-logs.component';
import { CountdownTimestampsComponent } from './countdown/countdown-timestamps/countdown-timestamps.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  
    CountdownComponent,
       CountdownControlsComponent,
       CountdownDisplayComponent,
       CountdownLogsComponent,
       CountdownTimestampsComponent
  ],
  imports: [
    CommonModule,
    CountdownSubjectRoutingModule,
    FormsModule
  ]
})
export class CountdownSubjectModule { }
