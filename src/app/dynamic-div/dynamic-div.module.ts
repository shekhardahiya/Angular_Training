import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDivRoutingModule } from './dynamic-div-routing.module';
import { CreateDivComponent } from './create-div/create-div.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateDivComponent
  ],
  imports: [
    CommonModule,
    DynamicDivRoutingModule,
    FormsModule
  ]
})
export class DynamicDivModule { }
