import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, CommonModule, AboutModule],
  providers: [HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
