import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [CommonModule, HomeComponent],
  exports: [HomeComponent],
  providers: [],
})
export class HomeModule { }
