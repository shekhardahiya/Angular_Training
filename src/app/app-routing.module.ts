import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountdownComponent } from './countdown/countdown.component';

const routes: Routes = [
  {
    path: 'dynamic', loadChildren: () => import('./dynamic-div/dynamic-div.module').
      then(mod => mod.DynamicDivModule)
  },
  {
    path: 'countdownSubject', loadChildren: () => import('./countdown-subject/countdown-subject.module').
      then(mod => mod.CountdownSubjectModule)
  },
  {
    path: 'ecommerce', loadChildren: () => import('./e-commerce/e-commerce-routing.module').
      then(mod => mod.ECommerceRoutingModule)
  },
  {
    path: 'studentData', loadChildren: () => import('./student-data/student-data-routing.module').
      then(mod => mod.StudentDataRoutingModule)
  },
  {
    path: 'banner', loadChildren: () => import('./banner/banner.module').
      then(mod => mod.BannerModule)
  },
  {
    path: 'countdown', component: CountdownComponent
  },
  {
    path: '**', component: CountdownComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
