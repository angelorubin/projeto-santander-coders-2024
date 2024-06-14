import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { ListService } from './list.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ListService]
})

export class HomeComponent {
  image: string = '/assets/images/example.jpg';
  result!: string;

  constructor(private listService: ListService) { }

  getResult(value: string) {
    this.result = value;
  }

  public getUsers() {
    return this.listService.getUsers();
  }
}
