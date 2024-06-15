import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ListService } from './list.service';
import { Observable } from 'rxjs';

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
  users$!: Observable<any>;

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.getUsersFromService();
  }

  getUsersFromService() {
    this.users$ = this.listService.getUsers();
  }

  getResult(value: string) {
    this.result = value;
  }
}
