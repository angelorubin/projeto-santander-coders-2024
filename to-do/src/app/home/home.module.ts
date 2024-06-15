import { NgModule } from '@angular/core';
import { CommonModule, BrowserModule, HttpClientModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
  providers: [],
})
export class HomeModule {}
