import { Component, OnInit } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { ListService } from './list.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, HomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  image: string = '/assets/images/example.jpg';
  result!: string;
  users!: any;

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.getUsersFromService();
  }

  getUsersFromService() {
    this.listService.getUsers().subscribe((result) => {
      console.log(result);
      this.users = result;
    });
  }

  getResult(value: string) {
    this.result = value;
  }
}
