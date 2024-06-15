import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Importando o CommonModule
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    CommonModule, // Certifique-se de que CommonModule está aqui
  ],
  providers: [|HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
