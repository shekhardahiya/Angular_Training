import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDivComponent } from './create-div/create-div.component';

const routes: Routes = [
  {path:'dynamic', component:CreateDivComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicDivRoutingModule { }
