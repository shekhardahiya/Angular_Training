import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentMarksComponent } from './student-marks/student-marks.component';

const routes: Routes = [
  {path:'marks', component:StudentMarksComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentDataRoutingModule { }
