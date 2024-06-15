import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ListService } from './list.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent implements OnInit {
  image: string = '/assets/images/example.jpg';
  result!: string;
  users: any = [{ name: 'angelo' }]


  constructor(private listService: ListService) { }

  ngOnInit() {
    this.getUsersFromService();
  }

  getUsersFromService() {
    this.listService.getUsers().subscribe((result) => {
      this.users = result;
    });
  }

  getResult(value: string) {
    this.result = value;
  }
}
