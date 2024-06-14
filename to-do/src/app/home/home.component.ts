import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  image: string = '/assets/images/example.jpg'; // Defina o caminho da imagem
  result!: string;

  constructor() {}

  getResult(value: string) {
    this.result = value;
    return this.result;
  }
}
