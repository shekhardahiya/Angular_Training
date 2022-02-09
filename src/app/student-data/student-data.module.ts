import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDataRoutingModule } from './student-data-routing.module';
import { StudentMarksComponent } from './student-marks/student-marks.component';


@NgModule({
  declarations: [
    StudentMarksComponent
  ],
  imports: [
    CommonModule,
    StudentDataRoutingModule
  ]
})
export class StudentDataModule { }
