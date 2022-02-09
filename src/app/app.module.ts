import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CountdownDisplayComponent } from './countdown/countdown-display/countdown-display.component';
import { CountdownControlsComponent } from './countdown/countdown-controls/countdown-controls.component';
import { CountdownTimestampsComponent } from './countdown/countdown-timestamps/countdown-timestamps.component';
import { CountdownLogsComponent } from './countdown/countdown-logs/countdown-logs.component';
import { HttpClientModule } from '@angular/common/http';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { StudentDataModule } from './student-data/student-data.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    CountdownDisplayComponent,
    CountdownControlsComponent,
    CountdownTimestampsComponent,
    CountdownLogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ECommerceModule,
    FormsModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
