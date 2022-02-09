import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { CategoryPageComponent } from './category-page/category-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    CategoryPageComponent
  ],
  imports: [
    CommonModule,
    ECommerceRoutingModule,
    HttpClientModule,
  ]
})
export class ECommerceModule { }
