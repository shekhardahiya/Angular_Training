import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerViewComponent } from './banner-view/banner-view.component';

const routes: Routes = [{
  path:'bannerView',component:BannerViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannerRoutingModule { }
