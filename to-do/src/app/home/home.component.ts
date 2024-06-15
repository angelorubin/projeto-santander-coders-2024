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

export class HomeComponent {
  image: string = '/assets/images/example.jpg';
  result!: string;
  users!: any;


  constructor(private listService: ListService) { }

  ngOnInit() {
    this.getUsersFromService();
  }

  getUsersFromService() {
    this.listService.getUsers().subscribe((result: any) => {
      this.users = result;
    });
  }

  getResult(value: string) {
    this.result = value;
  }
}
