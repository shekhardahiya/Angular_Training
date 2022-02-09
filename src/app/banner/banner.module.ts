import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';
import { BannerViewComponent } from './banner-view/banner-view.component';


@NgModule({
  declarations: [
    BannerViewComponent
  ],
  imports: [
    CommonModule,
    BannerRoutingModule
  ]
})
export class BannerModule { }
